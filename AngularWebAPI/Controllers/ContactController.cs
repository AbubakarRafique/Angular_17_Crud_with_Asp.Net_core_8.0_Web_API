using AngularWebAPI.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly AppDBContext _dbContext;

        public ContactController(AppDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult getContactlist()
        {
            var contacts = _dbContext.Contacts.ToList();
            if(contacts.Count == 0)
            {
                return Ok("The table is Empty");
            }
            return Ok(contacts);
           
        }
        [HttpPost]
        public IActionResult postContact(Contact contact)
        {
        
            _dbContext.Contacts.Add(contact);
            _dbContext.SaveChanges();
            return Ok("Data Add SuccessFully");
        }
        [HttpDelete]
        public IActionResult deleteContact(int id)
        {
            var contact = _dbContext.Contacts.Find(id);
            if (contact != null)
            {
                _dbContext.Contacts.Remove(contact);
                _dbContext.SaveChanges();
            }
            else
            {
                return NotFound("The data with that id is not Present in Database");
            }
            return Ok("Data delete Successfully");
        }
        [HttpPut]
        public IActionResult Update(Contact contact)
        {
            var entity = _dbContext.Contacts.FirstOrDefault(x =>x.Id == contact.Id);
            if (entity == null)
            {
                return NotFound();

            }
            entity.Email = contact.Email;
            entity.Name = contact.Name;
            entity.PhoneNumber = contact.PhoneNumber;
            entity.Favorite = contact.Favorite;

            _dbContext.Contacts.Update(entity);
            _dbContext.SaveChanges();
            return Ok("Data Update SuccessFully");
        }
    }
}
