using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication1
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }


        public string GetPage(string posturl, string postData)
        {
            Stream outstream = null;
            Stream instream = null;
            StreamReader reader = null;
            HttpWebResponse response = null;
            HttpWebRequest request = null;
            Encoding encoding = System.Text.Encoding.GetEncoding("gb2312");
            byte[] data = encoding.GetBytes(postData);

            try
            {
                CookieContainer cookieContainer = new CookieContainer();

                request = WebRequest.Create(posturl) as HttpWebRequest;
                request.CookieContainer = cookieContainer;
                request.AllowAutoRedirect = true;
                request.Method = "POST";
                request.ContentType = "application/x-www-form-urlencoded";
                request.ContentLength = data.Length;

                outstream = request.GetRequestStream();
                outstream.Write(data, 0, data.Length);
                outstream.Close();

                response = request.GetResponse() as HttpWebResponse;
                instream = response.GetResponseStream();
                reader = new StreamReader(instream, Encoding.UTF8);

                string content = reader.ReadToEnd();
                string err = string.Empty;
                return content;
            }
            catch (Exception ex)
            {
                string err = ex.Message;
                return string.Empty;
            }
        }

        protected void btnPost_Click(object sender, EventArgs e)
        {
            string cartNo = "230111";
            string engNo = "201979";
            string postData = "VehicleType=01&Abbr=%E7%B2%A4&Vehicle=B0wy15&FullVehicle=%E7%B2%A4B0WY15&Province=%E5%B9%BF%E4%B8%9C%E7%9C%81&City=%E6%B7%B1%E5%9C%B3%E5%B8%82&hid_City=&OwnerName=&VIN=230111&EIN=201979&txtCheckCode=" + txtCode.Text + "&hid_OwnerName=&hid_VIN=230111&hid_EIN=201979";
            string content = GetPage("http://wz.cheyooh.com/WZ/Violation_Results.aspx", postData);

            divContent.InnerHtml = content;
        }
    }
}