using System;

namespace API.DTOs
{
    public class ArticleDto
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; } = DateTime.UtcNow;
        public string Body { get; set; }
        public string Photo { get; set; }
        public int GroupId { get; set; }
    }
}