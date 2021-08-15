using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class CoursesController : BaseApiController
    {
        private readonly DataContext _context;
        public CoursesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
        {
            return await _context.Courses.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetCourse(int id)
        {
            return await _context.Courses.FindAsync(id);
        }

        [HttpPost]
        public async Task<ActionResult<CourseDto>> AddCourse(CourseDto courseDto)
        {
            // var image = Request.Form.Files.First();
            var course = new Course
            {
                Title = courseDto.Title,
                Duration = courseDto.Duration,
                NubmerOfSession = courseDto.NubmerOfSession,
                price = courseDto.price , 
                Instructor = courseDto.Instructor ,
                Discount = courseDto.Discount ,
                Description = courseDto.Description ,             
            };

            _context.Courses.Add(course);

            await _context.SaveChangesAsync();

            return new CourseDto
            {
                Title = course.Title,
                Duration = course.Duration,
                NubmerOfSession = course.NubmerOfSession,
                price = course.price , 
                Instructor = course.Instructor ,
                Discount = course.Discount ,
                Description = course.Description
            };
        }

        [HttpPost("add-video")]
        public async Task<ActionResult<VideoDto>> AddVideos(VideoDto videoDto)
        {
            var movie = new CoursesMovies
            {
                Url = videoDto.Url,
                Title = videoDto.Title,
                Description = videoDto.Description,
                Duration = videoDto.Duration
             
            } ; 
            
            return new VideoDto
            {
                Url = movie.Url , 
                Title = movie.Title,
                Description = movie.Description , 
                Duration = movie.Duration
            };
        }
    }
}