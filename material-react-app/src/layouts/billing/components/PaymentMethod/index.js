import React, { useState } from 'react';
import { Tooltip, Grid, Snackbar } from '@mui/material';
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import CheckIcon from '@mui/icons-material/Check';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import btcLogo from 'assets/images/logos/btc.png';
import ltcLogo from 'assets/images/logos/ltc.png';
import ethLogo from 'assets/images/logos/eth.png';
import bnbLogo from 'assets/images/logos/bnb.png';

function PaymentMethod() {
  const [copiedStatus, setCopiedStatus] = useState({
    btc: false,
    eth: false,
    bnb: false,
    ltc: false,
  });

  const contentMapping = {
    btc: 'BTC Address Content',
    eth: 'ETH Address Content',
    bnb: 'BNB Address Content',
    ltc: 'LTC Address Content',
  };

  const copyTextToClipboard = (id) => {
    const textToCopy = document.getElementById(id);
    const textRange = document.createRange();
    textRange.selectNode(textToCopy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(textRange);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    setCopiedStatus({ ...copiedStatus, [id]: true });
  };

  const handleCloseSnackbar = (id) => {
    setCopiedStatus({ ...copiedStatus, [id]: false });
  };

  return (
    <Card id="delete-account">
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Payment Method
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          {[
            { id: 'btc', logoSrc: btcLogo, label: 'BTC Address' },
            { id: 'eth', logoSrc: ethLogo, label: 'ETH Address' },
            { id: 'bnb', logoSrc: bnbLogo, label: 'BNB Address' },
            { id: 'ltc', logoSrc: ltcLogo, label: 'LTC Address' },
          ].map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <MDBox
                borderRadius="lg"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p={3}
                sx={{
                  border: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                }}
              >
                <MDBox component="img" src={item.logoSrc} alt="card logo" width="10%" mr={2} />
                <MDTypography variant="h6" fontWeight="medium" id={item.id}>
                  {contentMapping[item.id]}
                </MDTypography>
                <MDBox ml="auto" lineHeight={0}>
                  <Tooltip title={copiedStatus[item.id] ? 'Copied!' : `Copy ${item.label}`} placement="top">
                    {copiedStatus[item.id] ? (
                      <CheckIcon fontSize="small" />
                    ) : (
                      <Icon
                        sx={{ cursor: 'pointer' }}
                        fontSize="small"
                        onClick={() => copyTextToClipboard(item.id)}
                      >
                        copy
                      </Icon>
                    )}
                  </Tooltip>
                </MDBox>
              </MDBox>
              <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={copiedStatus[item.id]}
                autoHideDuration={3000}
                onClose={() => handleCloseSnackbar(item.id)}
                message="Copied to clipboard!"
              />
            </Grid>
          ))}
        </Grid>
      </MDBox>
    </Card>
  );
}

export default PaymentMethod;
