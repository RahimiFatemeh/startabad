using System;

namespace API.Entities
{
    public class Article
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; } 
        public string Body { get; set; }
        public string Photo { get; set; }
        public int GroupId { get; set; }
    }
}