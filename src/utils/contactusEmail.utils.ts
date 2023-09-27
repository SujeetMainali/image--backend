export const EnrollmentMail = (fullName: string): string => {
  return `
<!DOCTYPE html>

<body style="border: 2px solid black; border-radius: 10px; padding: 5px;">
    
    <p>Dear <b> ${fullName}</b>,</p>
    <p style="line-height: 2vh; text-align: justify;">
        Thank you for contacting MSME. We have received your message and will get back to you shortly. <br><br>
    
    Should you have any questions or concerns in the meantime, please don't hesitate to reach out to our dedicated support team at <a href="https://msmenepal.org">[MSME Nepal]</a> . We are here to assist you and make your Entrepreneur journey as smooth as possible. <br><br>
   
    </p>
    <b>Regards,</b>
    <p>
        <b>MSME Nepal</b>,<br>
        <b>Phone</b>: +977-01-5912704<br>
        <b>Email</b>:  info@msmenepal.org, msmesnepal@gmail.com
        <b>Address: Battisputali, Kathmandu, Nepal</b>
    </p>

</body>
</html>
`;
};
