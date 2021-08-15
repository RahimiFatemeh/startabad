using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class ArticleRepositroy
    {
        private readonly DataContext _context;
        public ArticleRepositroy(DataContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Article>> GetArticleAsync()
        {
            return await _context.Articles.ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        [HttpPost]
        public async Task<bool> DeleteArticle(int? ArticleId)
        {
            try
            {
                var article = await _context.Articles.FirstOrDefaultAsync(s => s.Id == ArticleId);
                _context.Articles.Remove(article);
                _context.SaveChanges();
                return true;
            }
            catch (System.Exception)
            {
                return false;
            } 
        }
        public void Update(Article article)
        {
            _context.Entry(article).State = EntityState.Modified;
        }

        // public async Task<IEnumerable<Article>> Search(string searchString)
        // {
            // var user = from m in _context.Articles
            //             select m;

            // if (!String.IsNullOrEmpty(searchString))
            // {
            //     user = user.Where(s => s.name.Contains(searchString));
            // }
            // return await user.ToListAsync();
        // }


    }
}