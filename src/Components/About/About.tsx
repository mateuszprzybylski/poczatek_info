type Props = {
  className?: string;
};

const About: React.FC<Props> = (props) => {
  return (
    <div className='container' id="about">
      <div className='row justify-content-between'>
        <div className='col-lg-8 offset-lg-2 align-self-center'>
          <div className='py-5 mb-5 mb-md-1'>
            <p className='p-heading'>
              im a ux /ui designer austin based who loves clean, simple & unique
              design. i also enjoy crafting brand identities, icons, &
              ilustration work.{' '}
            </p>
            <p className='separator'>
              To an English person, it will seem like simplified English, as a
              skeptical Cambridge friend of mine told me what Occidental is. The
              European languages are members of the same family.English person.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
