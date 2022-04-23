// material icons
import RefreshIcon from '@material-ui/icons/Refresh';

// styled components
import theme from '../../styles/theme';
import { Button } from '../UI/Button';
import { Wrapper } from '../UI/Wrapper';

const Error = () => {
  const refreshHandler = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <Wrapper>
      <h1 style={{ color: theme.colors.rouge }}>Woops!</h1>

      <p>Something went wrong there. Please refresh and try again.</p>

      <Button color='jungleGreen' onClick={refreshHandler} type='button'>
        <RefreshIcon fontSize='large' /> Refresh
      </Button>
    </Wrapper>
  );
};

export default Error;
