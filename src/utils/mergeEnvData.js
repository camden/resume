const mergeEnvData = infoData => {
  const missingLabels = [
    'GATSBY_INFO_PHONE',
    'GATSBY_INFO_EMAIL',
    'GATSBY_INFO_LOCATION_CITY',
    'GATSBY_INFO_LOCATION_REGION',
    'GATSBY_INFO_LOCATION_COUNTRY',
  ].filter(label => !process.env[label]);

  if (missingLabels.length > 0) {
    console.groupCollapsed(
      "Looks like you're missing some info in your .env file!"
    );
    missingLabels.forEach(label => console.log(`Missing: ${label}`));
    console.groupEnd();
  }
  
  return infoData
    .set('phone', process.env.GATSBY_INFO_PHONE)
    .set('email', process.env.GATSBY_INFO_EMAIL)
    .setIn(['location', 'city'], process.env.GATSBY_INFO_LOCATION_CITY)
    .setIn(['location', 'region'], process.env.GATSBY_INFO_LOCATION_REGION)
    .setIn(['location', 'countryCode'], process.env.GATSBY_INFO_LOCATION_COUNTRY);
};

export default mergeEnvData;
