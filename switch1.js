/**
 * Created by Babos on 28.04.2017.
 */
// switch-to-if

switch (browser) {
    case 'IE':
        alert('You ve got IE');
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Its fien for u');
        break;
    default:
        alert('Hope you r fine!');
}

if (browser == "IE") {
    alert('You ve got IE');
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert('Its fine for u');
    break;
} else {
    alert('Hope you r fine!');
}