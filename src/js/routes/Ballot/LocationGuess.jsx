import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme, withStyles } from '@material-ui/core/styles';
import PlaceIcon from '@material-ui/icons/Place';
import { renderLog } from '../../utils/logging';
import VoterStore from '../../stores/VoterStore';

class LocationGuess extends React.Component {
    static propTypes = {
      toggleSelectBallotModal: PropTypes.func.isRequired,
      hideLocationsGuessComponent: PropTypes.func.isRequired,
    };

    shouldComponentUpdate (nextProps) {
      // This lifecycle method tells the component to NOT render if not needed
      if (this.props.toggleSelectBallotModal !== nextProps.toggleSelectBallotModal) {
        return true;
      }
      if (this.props.hideLocationsGuessComponent !== nextProps.hideLocationsGuessComponent) {
        return true;
      }
      return false;
    }

    render () {
      renderLog(__filename);
      const { toggleSelectBallotModal, hideLocationsGuessComponent } = this.props;
      const bestGuess = VoterStore.getTextForMapSearch();
      // console.log('bestGuess before: ', bestGuess);
      return (
        <div id="location_guess" className="card-main__location-guess">
          <PlaceIcon style={{ fontSize: '35px', margin: 'auto 10px' }} />
          <ParagraphStyled>
            { bestGuess ?
              (
                <span>
                  Our best guess for your location is
                  {' '}
                  <span style={{ fontWeight: 'bold' }}>
                    &quot;
                    {bestGuess}
                    &quot;
                  </span>
                  .
                  {' '}
                </span>
              ) :
              null
            }
            <a style={{ color: '#4371cc', textDecoration: 'underline' }} onClick={toggleSelectBallotModal}>
              Enter your full address
            </a>
            {' '}
            to see the correct ballot items.
          </ParagraphStyled>
          <CloseComponent onClick={hideLocationsGuessComponent}>
            &times;
          </CloseComponent>
        </div>
      );
    }
}

const ParagraphStyled = styled.div`
  margin: auto;
  margin-left: 5px;
  font-weight: normal;
`;
const CloseComponent = styled.div`
  font-size: 25px;
  margin: 15px 25px 15px 35px;
  position: relative;
  bottom: 2px;
  align-self: center;
  cursor: pointer;
  font-weight: 700;
  color: #000;
  opacity: 0.5;
`;

export default withTheme()(withStyles()(LocationGuess));
