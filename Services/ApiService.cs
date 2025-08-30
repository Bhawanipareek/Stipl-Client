using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using System.Collections.Generic;
using Stipl_Client.Models;

namespace Stipl_Client.Services
{
    public class ApiService
    {
        private readonly HttpClient _http;

        public ApiService(HttpClient http)
        {
            _http = http;
        }

        // ✅ Get All
        public async Task<List<Category>> GetCategoriesAsync()
        {
            return await _http.GetFromJsonAsync<List<Category>>("categories");
        }

        // ✅ Get One
        public async Task<Category> GetCategoryAsync(int id)
        {
            return await _http.GetFromJsonAsync<Category>($"categories/{id}");
        }

        // ✅ Create
        public async Task<Category> CreateCategoryAsync(Category category)
        {
            var response = await _http.PostAsJsonAsync("categories", category);

            if (response.IsSuccessStatusCode)
            {
                var json = await response.Content.ReadFromJsonAsync<CreateResponse>();
                return json?.Category;
            }
            return null;
        }

        // ✅ Update
        public async Task<bool> UpdateCategoryAsync(int id, Category category)
        {
            var res = await _http.PutAsJsonAsync($"categories/{id}", category);
            return res.IsSuccessStatusCode;
        }

        // ✅ Delete
        public async Task<bool> DeleteCategoryAsync(int id)
        {
            var res = await _http.DeleteAsync($"categories/{id}");
            return res.IsSuccessStatusCode;
        }
    }

    public class CreateResponse
    {
        public string Msg { get; set; }
        public Category Category { get; set; }
    }
}
