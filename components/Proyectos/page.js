import Image from 'next/image';
import './/styles.css';


export default function HomePage() {
  return (

        <main className="bento">
          <div className="bento__container" data-variant-1>
            <div className="bento__item" style={{ gridRow: 'span 2', gridColumn: '1 / -1' }}>

            </div>
            <div className="bento__item" style={{ gridRow: 'span 2' }}>

            </div>
            <div className="bento__item" style={{ gridRow: 'span 2', gridColumn: 'span 2' }}>

            </div>
            <div className="bento__item" style={{ gridColumn: '1 / -1' }}>

            </div>
            <div className="bento__item" style={{ gridColumn: 'span 2' }}>

            </div>
            <div className="bento__item">

            </div>
          </div>

          <div className="bento__container" data-variant-2>
            <div className="bento__item" style={{ gridColumn: 'span 2' }}>

            </div>
            <div className="bento__item" style={{ gridColumn: 'span 2' }}>

            </div>
            <div className="bento__item" style={{ gridRow: 'span 4', gridColumn: '1 / -1' }}>

            </div>
            <div className="bento__item">

            </div>
            <div className="bento__item" style={{ gridColumn: 'span 2' }}>

            </div>
            <div className="bento__item">

            </div>
          </div>

          <div className="bento__container" data-variant-3>
            <div className="bento__item" style={{ gridRow: 'span 2', gridColumn: '1 / -1' }}>

            </div>
            <div className="bento__item" style={{ gridRow: 'span 2' }}>

            </div>
            <div className="bento__item" style={{ gridRow: 'span 2' }}>

            </div>
            <div className="bento__item" style={{ gridColumn: '1 / -1' }}>

            </div>
            <div className="bento__item" style={{ gridColumn: '1 / -1' }}>

            </div>
          </div>

        </main>
  );
}
