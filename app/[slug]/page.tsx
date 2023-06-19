'use client';
import { useQuery } from '@apollo/client';
import { getThemeColor } from '../utils/getThemeColor';
import landingPageCollection from '../graphql/landingPageCollection';

export default function Page({ params: { slug } }: { params: { slug: string } }) {
  const { data, loading } = useQuery(landingPageCollection, { variables: { slug } });

  if (loading) {
    return <div>Loading...</div>;
  }

  const landingPage = data?.landingPageCollection?.items[0];

  return (
    <div style={{ backgroundColor: '#fff' }}>
      {landingPage?.pageContentCollection?.items?.map((item: any, id: number) => {
        if (item.__typename === 'HeroClasic') {
          const { title, theme, unicase } = item || { theme: { theme: '' } };

          return (
            <section
              style={{
                backgroundColor: getThemeColor(theme?.theme),
                padding: theme?.padding,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
              key={id}
              className='mb-12'>
              <div className='flex max-w-screen-lg justify-center'>
                <div>
                  <div className='mb-12'>
                    <div className='text-xl mb-12'>{unicase}</div>
                    <h1 className='text-4xl mb-12'>{title}</h1>
                    <p className='text-lg mb-12'>{item.description.json.content[0].content[0].value}</p>
                  </div>
                  <div className='flex justify-between mb-12'>
                    <button style={{ backgroundColor: '#ffffff26' }} className='py-2 px-5 rounded' rel={'/'}>
                      Button 1
                    </button>
                    <button className='py-2 px-5 rounded' style={{ backgroundColor: '#ffffff26' }} rel={'/'}>
                      Button 2
                    </button>
                  </div>
                </div>
                <img src={item.image?.url} alt='hero image' />
              </div>
            </section>
          );
        }
      })}
      {landingPage?.pageContentCollection?.items?.map((item: any, id: number) => {
        const { theme, title, headline, image, containerLayout } = item || { theme: { theme: '' } };
        if (item.__typename === 'Duplex') {
          return (
            <section
              style={{
                backgroundColor: getThemeColor(theme.theme),
                padding: theme.padding,
              }}
              className='flex justify-center mb-12'
              key={id}>
              <div
                className='flex flex-row max-w-screen-lg items-center'
                style={{ direction: containerLayout ? 'ltr' : 'rtl' }}>
                <div style={{ color: theme.theme === 'White' ? '#000' : '#fff' }}>
                  <h1 className='mb-8'>{title}</h1>
                  <p>{headline.json.content[0].content[0].value}</p>
                </div>
                {image && <img src={image.url} alt='hero image' />}
              </div>
            </section>
          );
        }
      })}
    </div>
  );
}
