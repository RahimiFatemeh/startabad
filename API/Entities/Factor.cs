using System;

namespace API.Entities
{
    public class Factor
    {
        public int Id { get; set; }
        public int CourseId { get; set; }
        public int UserId { get; set; }
        public DateTime Date  { get; set; }
        public int Price { get; set; }
    }
}