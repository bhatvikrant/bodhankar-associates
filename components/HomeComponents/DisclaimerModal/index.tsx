import { useState, useEffect, useRef } from 'react';

// MUI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const DisclaimerModal = (): JSX.Element => {

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const accepted = localStorage.getItem('disclaimer-accepted')
    if (accepted === "1") { setOpen(false) }
    else { setOpen(true) }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const decline = () => {
    window.close()
    localStorage.setItem('disclaimer-accepted', '0')
    handleClose()
  }
  const accept = () => {
    localStorage.setItem('disclaimer-accepted', '1')
    handleClose()
  }
  return <Dialog
    open={open}
    onClose={handleClose}
    scroll='paper'
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
    disableBackdropClick
    disableEscapeKeyDown
    maxWidth='lg'
  >
    <DialogTitle id="scroll-dialog-title">DISCLAIMER</DialogTitle>
    <DialogContent dividers={true}>
      <DialogContentText
        id="scroll-dialog-description"
        ref={descriptionElementRef}
        tabIndex={-1}
      >
        <div className="p-4">

          <h2 className='font-bold text-xl mb-4'>Welcome to Bodhankar & Associates!
          </h2>
          <p className='mb-4'>By clicking on the “Accept” button below, the website visitor agrees and acknowledges that:-
          </p>

          <ol className='list-decimal list-outside'>
            <li>
              Grant of access to this website does not amount to any advertisement, personal communication, solicitation, invitation or any other inducement of any sort whatsoever by or on behalf of Bodhankar & Associates or any of its Associates to solicit any work through this website.
            </li>
            <li>
              The user wishes to gain more information about Bodhankar & Associates for his/her/their own information.

            </li>
            <li>
              Grant of access to this website is based on the voluntary request of the user in order to understand our practice areas and garner information about us. Any information obtained or materials downloaded from this website are completely at the user’s volition and any transmission, receipt or use of this site would not create any lawyer-client relationship. Neither this website nor the web pages and the information contained herein constitute a contract, or will form the basis of a contract, or any legal relationship.
            </li>
            <li>
              This website is a resource for informational purposes only and though intended, is not promised or guaranteed, to be complete or updated. Bodhankar & Associates does not warrant that the information contained on this website is accurate or complete, and hereby disclaims all liability to any person for any loss or damage caused by errors or omissions, whether such errors or omissions result from negligence, accident or any other cause.
            </li>
            <li>
              Bodhankar & Associates assumes no liability for the interpretation and/or use of the information contained on this website, nor does it offer a warranty of any kind, either express or implied. While, every care has been taken in preparing the content of this website and web pages to ensure accuracy at the time of publication and creation, however, Bodhankar & Associates assumes no responsibility for any errors, which despite all precautions may be found herein.
            </li>
            <li>
              The contents of this website do not constitute, and shall not be construed as, legal advice or a substitute for legal advice.
            </li>
            <li>
              Bodhankar & Associates is not liable for any consequence of any action taken by the user relying on material / information provided on this website or through any external links thereon.
            </li>
            <li>
              The information provided under this website is solely available at the user’s request for informational purposes only and should not be interpreted as soliciting or advertisement.
            </li>
            <li>
              Selective material and information (except any statutory instruments or judicial precedents) on this website is proprietary of Bodhankar & Associates, and no part thereof shall be used, with or without adaptation, without the express prior written consent of Bodhankar & Associates.
            </li>
            <li>
              All disputes, if any, are subject to the exclusive jurisdiction of competent courts in India, at Hyderabad only.
            </li>
          </ol>

        </div>

      </DialogContentText>
    </DialogContent>
    <DialogActions>

      <Button onClick={decline} color="secondary">
        Decline
      </Button>
      <Button onClick={accept} color="primary" variant='contained'>
        Accept
      </Button>
    </DialogActions>
  </Dialog>
}

export default DisclaimerModal
