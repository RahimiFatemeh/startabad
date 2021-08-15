using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class CourseRepository : ICourseRepository
    {
        private readonly DataContext _context;
        public CourseRepository(DataContext context)
        {
            _context = context;
        }       

        public async Task<Course> GetCourseByIdAsync(int id)
        {
            return await _context.Courses.FindAsync(id) ; 
        }
        public async Task<IEnumerable<Course>> GetCoursesAsync()
        {
            return await _context.Courses.ToListAsync();
        }
        public async Task<bool> RemoveCourseAsync(int? id)
        {
            try
            {
                var course = await _context.Courses.FirstOrDefaultAsync(s => s.Id == id);
                _context.Courses.Remove(course);
                _context.SaveChanges();
                return true;
            }
            catch (System.Exception)
            {
                return false;
            }
        }
        public async Task<Course> AddCourseAsync(Course course)
        {
            return null;                        
        }
        public async Task<Course> UpdateCourseAsync(Course course)
        {
            return null ; 
        }
    }
}