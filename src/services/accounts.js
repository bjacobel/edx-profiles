import 'whatwg-fetch';

const isdef = (key) => {
  return (key !== null && typeof key !== undefined);
};

export const getAccount = (accountId) => {
  return fetch(`/api/user/v1/accounts/${accountId}`, {
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
    }
  }).then((data) => data.json())
  .catch((error) => {
    return {
      "username": "bjacobel",
      "bio": "This is my bio it is a great bio",
      "requires_parental_consent": false,
      "name": "Brian Jacobel",
      "country": "US",
      "is_active": true,
      "profile_image": {
        "image_url_full": "https://d1kekzok76m982.cloudfront.net/prod/1e16a5d4a450eac5d6b261e65c13627d_500.jpg?v=1481243402",
        "image_url_large": "https://d1kekzok76m982.cloudfront.net/prod/1e16a5d4a450eac5d6b261e65c13627d_120.jpg?v=1481243402",
        "image_url_medium": "https://d1kekzok76m982.cloudfront.net/prod/1e16a5d4a450eac5d6b261e65c13627d_50.jpg?v=1481243402",
        "image_url_small": "https://d1kekzok76m982.cloudfront.net/prod/1e16a5d4a450eac5d6b261e65c13627d_30.jpg?v=1481243402",
        "has_image": true
      },
      "year_of_birth": 1992,
      "level_of_education": "b",
      "accomplishments_shared": false,
      "goals": "Applying for a developer position",
      "language_proficiencies": [
        {
          "code": "en"
        }
      ],
      "gender": "m",
      "account_privacy": "all_users",
      "mailing_address": "",
      "email": "bjacobel@gmail.com",
      "date_joined": "2016-02-17T16:05:12Z"
    };
  }).then((json) => {
    const completion = {
      bio: isdef(json.bio),
      name: isdef(json.name),
      profile_image: json.profile_image.has_image,
      year_of_birth: isdef(json.year_of_birth),
      level_of_education: isdef(json.level_of_education),
      language_proficiencies: json.language_proficiencies.length > 0,
      gender: isdef(json.gender),
      mailing_address: isdef(json.mailing_address)
    };

    const completion_percentage = Object.values(completion).filter(x => x).length / Object.keys(completion).length;

    return Object.assign({}, json, {
      completion,
      completion_percentage
    })
  })
}
