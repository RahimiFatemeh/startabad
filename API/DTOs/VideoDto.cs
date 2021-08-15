using System;

namespace API.DTOs
{
    public class VideoDto
    {
        public string Url { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Duration { get; set; }
        
    }
}