using System.ComponentModel.DataAnnotations;

namespace AngularWebAPI.Model
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? Email { get; set; }
        [Required]
        public string? PhoneNumber { get; set; }
        [Required]
        public bool? Favorite {  get; set; }
    }
}
