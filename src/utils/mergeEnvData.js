const mergeEnvData = infoData => {
  return infoData
    .set('phone', process.env.INFO_PHONE)
    .set('email', process.env.INFO_EMAIL)
    .setIn(['location', 'city'], process.env.INFO_LOCATION_CITY)
    .setIn(['location', 'region'], process.env.INFO_LOCATION_REGION)
    .setIn(['location', 'countryCode'], process.env.INFO_LOCATION_COUNTRY);
};

export default mergeEnvData;
