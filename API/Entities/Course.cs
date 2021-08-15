using System;
using System.Collections.Generic;

namespace API.Entities
{
    public class Course
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Duration { get; set; }
        public int NubmerOfSession { get; set; }
        public int price { get; set; }
        public string Instructor { get; set; }
        public int Discount { get; set; }
        public string Description { get; set; }
        public ICollection<CoursesMovies>  Movie { get; set; }
    }
}