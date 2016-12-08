export const getAccount = (accountId) => {
  return new Promise((resolve) => {
    resolve({
      "username": "bjacobel-stage",
      "bio": null,
      "requires_parental_consent": true,
      "name": "Brian Jacobel",
      "country": "US",
      "is_active": true,
      "profile_image": {
        "image_url_full": "https://d3oqliy4hkdz86.cloudfront.net/static/edx.org/images/profiles/default_500.d41d8cd98f00.png",
        "image_url_large": "https://d3oqliy4hkdz86.cloudfront.net/static/edx.org/images/profiles/default_120.872c4f351224.png",
        "image_url_medium": "https://d3oqliy4hkdz86.cloudfront.net/static/edx.org/images/profiles/default_50.76570a4d025e.png",
        "image_url_small": "https://d3oqliy4hkdz86.cloudfront.net/static/edx.org/images/profiles/default_30.a82b312fc98a.png",
        "has_image": false
      },
      "year_of_birth": null,
      "level_of_education": null,
      "accomplishments_shared": false,
      "goals": "",
      "language_proficiencies": [],
      "gender": null,
      "account_privacy": "private",
      "mailing_address": "",
      "email": "bjacobel@edx.org",
      "date_joined": "2016-03-14T19:29:16Z",
    });
  });
}
