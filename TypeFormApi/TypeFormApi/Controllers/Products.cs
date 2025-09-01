using Microsoft.AspNetCore.Mvc;

namespace TypeFormApi.Controllers;

public class Products : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
}