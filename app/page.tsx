import CarouselComponent from 'components/carousel/page';
import Grid from 'components/grid';
import Footer from 'components/layout/footer';
import ProductGridItems from 'components/layout/product-grid-items';
import { getCollectionProducts } from 'lib/saleor';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Saleor.',
  openGraph: {
    type: 'website',
  },
};

export default async function HomePage() {
  const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });

  return (
    <>
      <div className="hidden md:block">
        <CarouselComponent
          images={['/envioGratis.png', '/banner.png']}
          className="md:h-64 lg:h-96 lg:w-96"
          autoPlay={true}
          removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
        />
      </div>
      <div className="block md:hidden">
        <CarouselComponent
          images={['/envioGratisMobile.png', '/bannerMobile.png']}
          className="h-40"
          autoPlay={true}
          removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
        />
      </div>
      <div className="m-10 grid justify-items-center whitespace-nowrap text-base font-medium tracking-wider text-[#a8a8a8] xl:text-3xl">
        Encuentra el arete perfecto para ti
      </div>
      <Suspense>
        <div className="mx-10 mb-24 lg:mx-32 lg:mb-40">
          {products.length > 0 ? (
            <Grid className="grid-cols-1 gap-y-24 md:grid-cols-3 lg:grid-cols-4 xl:gap-y-40">
              <ProductGridItems products={products} />
            </Grid>
          ) : null}
        </div>
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
