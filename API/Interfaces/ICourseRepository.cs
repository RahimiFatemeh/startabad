using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface ICourseRepository
    {
        Task<Course> GetCourseByIdAsync(int id);        //get
        Task<IEnumerable<Course>> GetCoursesAsync();    //get all
        Task<Course> AddCourseAsync(Course course);     //add
        Task<bool> RemoveCourseAsync(int? id);          //delete
        Task<Course> UpdateCourseAsync(Course course);  //update
    }
}