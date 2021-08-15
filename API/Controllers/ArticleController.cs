using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ArticleController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public ArticleController(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Article>>> GetArticles()
        {
            return await _context.Articles.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Article>> GetArticle(int id)
        {
            return await _context.Articles.FindAsync(id) ;
        }

        [HttpPost]
        public async Task<ActionResult<ArticleDto>> AddArticle(ArticleDto articleDto)
        {
            // var image = Request.Form.Files.First();
            var article = new Article
            {
                Author = articleDto.Author,
                Title = articleDto.Title,
                Body = articleDto.Body,
                GroupId = articleDto.GroupId , 
                Photo = articleDto.Photo
            };

            _context.Articles.Add(article);

            await _context.SaveChangesAsync();

            return new ArticleDto
            {
                Author = article.Author,
                Title = article.Title,
                Body = article.Body,
                GroupId = article.GroupId , 
                Photo = article.Photo
            };
        }

        [HttpPut]
        public async Task<ActionResult> EditArticle(ArticleDto articleDto)
        {
            var FindArticle = await _context.Articles.Where(s => s.Id == articleDto.Id).FirstOrDefaultAsync();
            
            if(FindArticle != null) { 

                _mapper.Map(articleDto , FindArticle);

                _context.Entry(FindArticle).State = EntityState.Modified;
            }

            if (await _context.SaveChangesAsync() > 0) return NoContent();

            return BadRequest("Failed to update user"); 
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteArticle(int id)
        {
            if (id <= 0)
            return BadRequest("Not a valid student id");

            var article = await _context.Articles.Where(a => a.Id == id).FirstOrDefaultAsync(); 
            if(article != null)
            {
                _context.Remove(article) ; 
                await _context.SaveChangesAsync(); 
                return Ok();
            }
            return NotFound("مقاله‌ای با این شناسه یافت نشد."); 
        }

            // var updatedBasket = await _basketRepository.UpdateBasketAsync(customerBasket);

            // return Ok(updatedBasket);

        //     _context.Update(article);

        //     // _context.Entry(articleDto).State = EntityState.Modified;

        //     article.Author = articleDto.Author;
        //     article.Title = articleDto.Title , 
        //          article.Body = articleDto.Body , 
        //          article.GroupId = articleDto.GroupId
        //      };

        
        //     return await _context.SaveChangesAsync() > 0;
        // }
    }
}