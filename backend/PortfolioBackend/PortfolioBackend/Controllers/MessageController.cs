using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using PortfolioBackend.Models;
using System.Web.Http.Cors;
using System.Net.Http;
using System;

namespace PortfolioBackend.Controllers
{
    [EnableCors(origins: "http://mywebclient.azurewebsites.net", headers: "*", methods: "*")]
    public class MessageController : ApiController
    {
        // GET: api/Reservations
        [Route("api/GetMessages", Name = "GetMessages")]
        [HttpGet]
        public async Task<List<UserContactInfo>> GetMessages()
        {
            using (var db = new PortfolioPageEntities1())
            {
                var c = await (from message in db.UserContactInfo select message).ToListAsync();

                return c;
            }
        }

        [Route("api/SaveMessages")]
        [HttpPost]
        public HttpResponseMessage SaveMessage([FromBody] UserContactInfo m)
        {
            using (var db = new PortfolioPageEntities1())
            {
                //UserContactInfo user = db.UserContactInfo.;

                //user.Email = m.Email;
                //user.Fullname = m.Fullname;
                //user.Message = m.Message;

                //db.Entry(m).State = EntityState.Added;
                m.DATETIME = DateTime.Now.ToString();

                db.UserContactInfo.Add(m);
                db.SaveChanges();


                //var response = Request.CreateResponse(HttpStatusCode.Created);

                //string uri = Url.Link("GetMessages", new { fullname = m.Fullname, email = m.Email, message = m.Message });
                //response.Headers.Location = new Uri(uri);
                //return response;


            }
            var response = Request.CreateResponse(HttpStatusCode.Created);

            //// Generate a link to the new book and set the Location header in the response.
            string uri = Url.Link("GetMessages", new { fullname = m.FULLNAME, email = m.EMAIL, message = m.MESSAGE, phone = m.PHONE });
            response.Headers.Location = new Uri(uri);
            return response;
        }
    }
}