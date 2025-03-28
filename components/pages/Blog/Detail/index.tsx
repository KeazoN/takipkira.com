import Categories from "../Categories";
import FeaturedPosts from "../FeaturedPosts";

const BlogDetail = () => {
  return (
    <div className="container max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2">
          <div className="max-w-3xl">
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Blog Başlığı Burada Olacak
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-sky-100" />
                  <span>Yazar Adı</span>
                </div>
                <span>•</span>
                <time>12 Ocak 2024</time>
              </div>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 bg-sky-50" />

            <div className="prose prose-lg max-w-none prose-sky prose-headings:font-bold prose-a:text-sky-600 hover:prose-a:text-sky-500">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2>Alt Başlık Örneği</h2>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>

              <blockquote>
                Bu bir alıntı örneğidir. Önemli notlar veya vurgulanmak istenen
                içerikler için kullanılabilir.
              </blockquote>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-full bg-sky-50 text-sky-700 text-sm font-medium">
                #teknoloji
              </span>
              <span className="px-4 py-2 rounded-full bg-sky-50 text-sky-700 text-sm font-medium">
                #yazılım
              </span>
              <span className="px-4 py-2 rounded-full bg-sky-50 text-sky-700 text-sm font-medium">
                #blog
              </span>
            </div>
          </div>
        </article>

        <div className="h-full">
          <div className="h-fit flex flex-col gap-8">
            <FeaturedPosts />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
