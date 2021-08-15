using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Movies")]
    public class CoursesMovies
    {
        public int Id { get; set; }
        public string Url { get; set; }  
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Duration { get; set; }
        public Course Course { get; set; }
        public int CourseId { get; set; }

    }
}