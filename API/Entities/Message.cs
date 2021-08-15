namespace API.Entities
{
    public class Message
    {
        public int Id { get; set; }
        public int UserId { get; set; }

        public string Name { get; set; }
        public string body { get; set; }    
        
    }
}