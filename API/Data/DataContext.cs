using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> Users {get; set; }
        public DbSet<Article> Articles {get; set; }
        public DbSet<Course> Courses {get; set; }
        public DbSet<Message> Messages {get; set; }
        public DbSet<Factor> Factors {get; set; }
        public DbSet<Group> Groups {get; set; }
    }
}