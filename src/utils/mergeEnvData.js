const mergeEnvData = infoData => {
  const missingLabels = [
    'INFO_PHONE',
    'INFO_EMAIL',
    'INFO_LOCATION_CITY',
    'INFO_LOCATION_REGION',
    'INFO_LOCATION_COUNTRY',
  ].filter(label => !process.env[label]);

  if (missingLabels.length > 0) {
    console.groupCollapsed(
      "Looks like you're missing some info in your .env file!"
    );
    missingLabels.forEach(label => console.log(`Missing: ${label}`));
    console.groupEnd();
  }

  return infoData
    .set('phone', process.env.INFO_PHONE)
    .set('email', process.env.INFO_EMAIL)
    .setIn(['location', 'city'], process.env.INFO_LOCATION_CITY)
    .setIn(['location', 'region'], process.env.INFO_LOCATION_REGION)
    .setIn(['location', 'countryCode'], process.env.INFO_LOCATION_COUNTRY);
};

export default mergeEnvData;
