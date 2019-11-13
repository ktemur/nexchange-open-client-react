import React, { useState, useMemo, useCallback } from 'react'
import { Col, Button } from 'reactstrap'
import styled from '@emotion/styled'
import { I18n } from 'react-i18next'
import Support from './Support'
import Ellipses from 'Components/Ellipses'

const VideoCard = (props) => {
  const { title, content } = props
  const [showSupportModal, setShowSupportModal] = useState(false)

  const onContactUs = useCallback(() => {
    setShowSupportModal(s => !s)
    window.gtag('event', 'Whitelabel Hero', {event_category: 'interaction', event_label: `Click Contact Us`});
  }, [])


  return (
    <I18n ns="translations">
      {t => (
        <StyledContainer>
          <div className='container'>
            <Col md="6">
              <h1>{title}</h1>
              <Button>{ t('videocard.livepreview') }</Button>
              <Button onClick={onContactUs}>{ t('videocard.contactus') }</Button>
            </Col>
            <Col md="6">
              {content}
            </Col>
          </div>

          <Ellipses />
          <Support show={showSupportModal} onClose={() => setShowSupportModal(false)} />
        </StyledContainer>
      )}
    </I18n>
  )
}

const StyledContainer = styled.div`
  position: relative;
  overflow: hidden;
  text-align: left;
  > .container {
    min-height: 80vh;
    position: relative;
    z-index: 2;
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 960px) {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`

export default VideoCard