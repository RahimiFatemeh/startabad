using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class LoginDto
    {
        [Required(ErrorMessage="لطفا نام کاربری را وارد کنید.")]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}