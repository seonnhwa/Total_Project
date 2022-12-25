import { SectionsContainer, Section } from 'react-fullpage';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Modal from './components/Modal';
import ModalBody from './components/ModalBody';

const App = () => {
  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
  };

  return (
    <div>
      <Header />
      <ModalBody />
      <SectionsContainer {...options}>
        <Section className="section1">
          <Modal />
          <Carousel />
        </Section>
        <Section className="section2">
          <Modal />
          <Carousel />
        </Section>
        <Section className="section3">
          <Modal />
          <Carousel />
        </Section>
      </SectionsContainer>
    </div>
  );
};

export default App;
