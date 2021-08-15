using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using API.Controllers;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace API.Data
{
public class AccountController : BaseApiController
    {
        private readonly ITokenService _tokenService;
        
        private readonly DataContext _context;

        public AccountController(DataContext context , ITokenService tokenService)
        {
            _tokenService = tokenService;
            _context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (await UserExists(registerDto.Username)) return BadRequest("نام کاربری تکراری است");
            using var hmac = new HMACSHA512();

            var user = new AppUser
            {
                Name = registerDto.Name ,
                Username = registerDto.Username.ToLower() ,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key

            };
            _context.Users.Add(user) ;
            await _context.SaveChangesAsync();

            return new UserDto
            {
                Username = user.Username,
                Token = _tokenService.CreateToken(user) , 
                Name = user.Name
            } ;       
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _context.Users
            .SingleOrDefaultAsync(x => x.Username == loginDto.Username) ;

            if (user == null) return Unauthorized("نام کاربر ی اشتباه است") ;
            
            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));
            //because it's byte we need to loop over on
            for (int i =0 ; i < computedHash.Length ; i++ )
            {
                if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("رمز عبور اشتباه است");
            }
            
            return new UserDto
            {
                Username = user.Username,
                Token = _tokenService.CreateToken(user) , 
                Name = user.Name
            } ;    
        }

        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.Username == username.ToLower());
        }
    }
}