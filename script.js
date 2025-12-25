document.addEventListener("DOMContentLoaded", function () {
    // Select the send email button correctly
    const sendEmailButton = document.getElementById('sendEmailButton');
    
    fetch('congressmen.json')
        .then(response => response.json())
        .then(data => {
            const congressmen = data.congressmen;

            // Select the email text area for displaying the default message
            const emailTextArea = document.getElementById('emailText');


            const defaultEmailBody = `Dear Sir/Madam,

I am writing to raise an urgent concern regarding apparent incitement to violence and public threats made in the United Kingdom.
On or around a recent protest outside the Pakistan Consulate in Bradford, PTI supporters were reportedly heard chanting slogans calling for the death of Pakistan’s CDF & COAS, FM Asim Munir. The chants allegedly included explicit references to killing him via a “car blast,” which appears to amount to encouragement of terrorist-style violence and targeted assassination.

Such statements go well beyond lawful protest. They risk normalising political violence, endangering individuals, and inflaming tensions within communities. They may also fall within UK offences relating to threatening behaviour, harassment, public order, and encouraging or glorifying violence.

I respectfully request that the Home Office:

1. Review available footage and reporting of the incident (including any social media videos) to assess whether criminal thresholds have been met;
2. Refer the matter to relevant policing and counter-extremism/counter-terror channels as appropriate; and
3. Ensure UK public spaces are not used to issue explicit threats of lethal violence against any individual.

https://x.com/UKPTIOfficial/status/2003469391615394061 presents the evidence of such threats.

Thank you for your attention to this matter. 

Yours faithfully,`;
            // Display the initial default email body
            emailTextArea.textContent = defaultEmailBody;

            // Concatenate all emails into a single string
            const allEmailAddresses = congressmen.map(congressman => congressman.email).join(',');

            // Add event listener to the send email button
            sendEmailButton.addEventListener("click", function () {
                const mailtoLink = `mailto:${allEmailAddresses}?subject=${encodeURIComponent('Formal Complaint – Online Threats Against Pakistani CDF & COAS FM Asim Munir')}&body=${encodeURIComponent(defaultEmailBody)}`;
                
                // Set mailto link and update email content preview in textarea
                sendEmailButton.href = mailtoLink;
                emailTextArea.textContent = defaultEmailBody;
            });
        })
        .catch(error => console.error('Error loading congressman data:', error));
});
