const params = new URLSearchParams(window.location.search);
const formType = params.get("form");

const title = document.getElementById("title");
const message = document.getElementById("message");

if (formType === "individual-annual") {
    title.innerHTML = "Membership Submitted";
    message.innerHTML = 
        "Thank you for joining The Food Investors Society!\n\n" +
        "You'll receive a welcome email and details of your £1 share shortly.\n\n" +
        "Together, we're building a healthier, fairer, and more sustainable food future.";
}

else if (formType === "founder-individual-lifetime") {
    title.innerHTML = "Membership Submitted";
    message.innerHTML = 
        "Thank you for becoming a Lifetime Member of The Food Investors Society!\n\n" +
        "Your one-off contribution helps build lasting " +
        "change and supports the development of " +
        "foodXchange - the UK's first community-owned " + 
        "platform helping people make healthier, more " + 
        "informed food choices.\n\n" + 
        "You'll receive a confirmation email, receipt, and Founders List recognition shortly."
}

else if (formType === "volunteer") {
    title.innerHTML = "Membership Submitted";
    message.innerHTML = 
        "Thank you for becoming a <b>Volunteer Member</b> of <i>The Food Investors Society</i>!\n\n" +
        "We'll be in touch soon to learn more about your interests and match you with opportunities to use your skills for good.\n\n" +
        "Together, we're building a healthier, fairer, and more sustainable food future."
}

else if (formType === "affiliate-partner") {
    title.innerHTML = "Membership Submitted";
    message.innerHTML = 
        "Thank you for joining <i>The Food Investors Society</i> as an <b>Affiliate Partner</b>!\n\n" +
        "Your organisation's support strengthens our shared mission to create a healthier, fairer, and more sustainable food future.\n\n" +
        "We'll contact your nominated representative soon to confirm your membership."
}

else if (formType === "strategic-partner") {
    title.innerHTML = "Membership Submitted";
    message.innerHTML = 
        "Thank you for joining <i>The Food Investors Society</i> as a <b>Strategic Partner</b>!\n\n" + 
        "Your organisation's support strengthens our shared mission to create a healthier, fairer, and more sustainable food future.\n\n" +
        "We'll contact your nominated representative soon to confirm your membership."
}

else if (formType === "community-food-non-profit-partner") {
    title.innerHTML = "Membership Submitted";
    message.innerHTML = 
        "Thank you for joining <i>The Food Investors Society</i> as a <b>Community Food Partner</b>!\n\n" +
        "Your project is now part of a growing network working to make good food accessible to everyone.\n\n" +
        "We'll be in touch soon to confirm your listing on My Food Neighbourhood and welcome you to the community."
}

else if (formType === "community-food-for-profit-partner") {
    title.innerHTML = "Membership Submitted";
    message.innerHTML = 
        "Thank you for joining <i>The Food Investors Society</i> as a <b>Community Food Partner</b>!\n\n" +
        "We'll be in touch soon to confirm your listing on the My Food Neighbourhood directory and welcome you to our community of good food businesses.\n\n" +
        "Together, we're helping to build a healthier, fairer food system — one neighbourhood at a time."
}

else if (formType === "community-share-owner") {
    title.innerHTML = "Membership Submitted";
    message.innerHTML = 
        "Thank you for investing in community shares and becoming a <b>Share Owner Member</b> of <i>The Food Investors Society Ltd</i>!\n\n" +
        "Your investment supports the development and launch of foodXchange and strengthens our " +
        "community-owned movement for a fairer, better food future.\n\n" +
        "A confirmation receipt and investment statement will be emailed to you shortly."
}

else if (formType === "supporter") {
    title.innerHTML = "Application Submitted";
    message.innerHTML = 
        "Thank you for becoming a <b>Supporter</b> of <i>The Food Investors Society</i>!\n\n" +
        "Your organisation is now part of a growing movement committed to reshaping the UK's food environment " +
        "for the better. We will be in touch shortly to confirm your listing and share supporter updates.\n\n" +
        "We'll contact your nominated representative soon to confirm your membership."
}

else {
    title.innerHTML = "Submission Received";
    message.innerHTML = "Thank you for your submission.";
}