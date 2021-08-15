using System.Collections.Generic;

namespace API.Entities
{
    public class AppUser
    {
        public int  Id { get; set; }    

        public string Name { get; set; }

        public string Username { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

        public string Phone { get; set; }

        public ICollection<Course> Courses { get; set; }

    }
}