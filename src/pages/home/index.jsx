import React from 'react';
import ReactDOM from 'react-dom';
import { getScrollTop, getLink } from '../../../utils';
import Header from '../../components/header';
import Button from '../../components/button';
import Footer from '../../components/footer';
import Language from '../../components/language';
import Item from './featureItem';
import homeConfig from '../../../site_config/home';
import './index.scss';

class Home extends Language {

  constructor(props) {
    super(props);
    this.state = {
      headerType: 'primary',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollTop = getScrollTop();
      if (scrollTop > 66) {
        this.setState({
          headerType: 'normal',
        });
      } else {
        this.setState({
          headerType: 'primary',
        });
      }
    });
  }

  render() {
    const language = this.getLanguage();
    const dataSource = homeConfig[language];
    const { headerType } = this.state;
    const headerLogo = headerType === 'primary' ? '/img/IPADS-Logo-Blue.png' : '/img/IPADS-Logo-Blue.png';
    return (
      <div className="home-page">
        <section className="top-section">
          <Header
            currentKey="home"
            type={headerType}
            logo={headerLogo}
            language={language}
            onLanguageChange={this.onLanguageChange}
          />
          <div className="vertical-middle">
            <div className="product-name">
              <h2>{dataSource.brand.brandName}</h2>
            </div>
            <p className="product-desc">{dataSource.brand.briefIntroduction}</p>
            <div className="button-area">
            {
              dataSource.brand.buttons.map(b => <Button type={b.type} key={b.type} link={b.link} target={b.target}>{b.text}</Button>)
            }
            </div>
            <div className="button-area2">
            {
              dataSource.brand.buttons.map(b => <Button type={'normal'} key={'normal'} link={'developers/index.html'} target={'_self'}>{'Why DuVisor?'}</Button>)
            }
            </div>
          </div>
          <div className="animation animation1" />
          <div className="animation animation2" />
          <div className="animation animation3" />
          <div className="animation animation4" />
          <div className="animation animation5" />
        </section>
        <section className="title1-section">

              <h3>{'Why DuVisor?'}</h3>
          
        </section>
        <section className="introduction-section">
          <div className="introduction-body">
            <div className="introduction">
              <h3>{dataSource.introduction.title}</h3>
              <p>{dataSource.introduction.desc}</p>
              <p>{'The one-to-one service model further enhances the isolation between VMs and the fault tolerance of the entire system.'}</p>
            </div>
            <img src={getLink(dataSource.introduction.img)} />
          </div>
        </section>
        <section className="introduction-section">
          <div className="introduction-body">
            <div className="introduction">
              <h3>{'Near-native Performance'}</h3>
              <p>{'Getting rid of redundant mode switching completely unleash the potential performance of virtualization. '}</p>
              <p>{'All-in-one design makes code further efficient.'}</p>
            </div>
            <img src={getLink('/img/Performance.png')} />
          </div>
        </section>
        <section className="introduction-section">
          <div className="introduction-body">
            <div className="introduction">
              <h3>{'Better Practicality'}</h3>
              <p>{'Benefit from the thriving software environment in user space, DuVisor is developed in the memory-safe language Rust. Each upgrade of DuVisor can be completed without host reboots. Stronger fault tolerance also leads to more stable cloud services and better management.'}</p>
            </div>
            <img src={getLink('/img/Practicality.png')} />
          </div>
        </section>
        <Footer logo="/img/IPADS-Logo-Blue.png" language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
