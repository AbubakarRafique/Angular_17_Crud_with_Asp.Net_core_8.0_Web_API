using Microsoft.EntityFrameworkCore;

namespace AngularWebAPI.Model
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Contact> Contacts { get; set; }
    }
}
