async function sleep(ms) { return new Promise(_ => window.setTimeout(_, ms)); }
function until(conditionFxn)
{
	const check = resolve =>
	{
		if (conditionFxn()) resolve();
		else setTimeout(_ => check(resolve), 250);
	}
	return new Promise(check);
}

function setRootStyleProperty(property, value) { document.documentElement.style.setProperty(property, value); }

const addChild = (e_parent, data, preappend, postappend) =>
{
	data = typeof data === 'string' ? { tag: data } : (data ?? { tag: 'div' });
	let e = document.createElement(data.tag ?? 'div');
	data.tag = undefined;
	for (let prop in data) e[prop] = data[prop];
	if (typeof preappend === 'function') preappend(e);
	e_parent = e_parent ?? document.body;
	e_parent.appendChild(e);
	if (typeof postappend === 'function') postappend(e);
	return e;
};

const addLabel = (e_parent, text, text_espanol) =>
{
	if (text_espanol)
	{
		addChild(e_parent, { tag: 'span', className: 'lang-en', innerText: text });
		addChild(e_parent, { tag: 'span', className: 'lang-es', innerText: text_espanol });
	}
	else
	{
		addChild(e_parent, { tag: 'span', innerText: text });
	}
};

const get_stored_string = (key, value_default = '') =>
{
	if (typeof key !== 'string' || key.length < 1) return value_default;

	let lsobj = localStorage.getItem(key);
	return typeof lsobj === 'string' ? lsobj : value_default;
};

const set_stored_string = (key, value = '') =>
{
	if (typeof key !== 'string' || key.length < 1) return;
	localStorage.setItem(key, value);
};

const add_css_file = path =>
{
	let e_css = document.createElement('link');
	e_css.rel = 'stylesheet';
	e_css.type = 'text/css';
	document.head.appendChild(e_css);
	e_css.href = path;
};

add_css_file('./styles.css');




















const galleries = [
	{
		name: 'Patio Covers', name_es: 'Cubiertas de Patio',
		images: [
			{ src: './resources/images/business/work/patio_covers/work-patio-cover-01.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/patio_covers/work-patio-cover-02.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/patio_covers/work-patio-cover-03.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/patio_covers/work-patio-cover-04.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/patio_covers/work-patio-cover-05.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/patio_covers/work-patio-cover-06.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/patio_covers/work-patio-cover-07.webp', name: '', desc: '' },
		]
	},
	{
		name: 'Stone Kitchens', name_es: 'Cocinas de Piedra',
		images: [
			{ src: './resources/images/business/work/kitchens/work-kitchen-01.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/kitchens/work-kitchen-02.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/kitchens/work-kitchen-03.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/kitchens/work-kitchen-04.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/kitchens/work-kitchen-05.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/kitchens/work-kitchen-06.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/kitchens/work-kitchen-07.webp', name: '', desc: '' },
		]
	},
	{
		name: 'Flagstone Patios', name_es: 'Patios de Losas',
		images: [
			{ src: './resources/images/business/work/flagstone_patio/work-flagstone-patio-01.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/flagstone_patio/work-flagstone-patio-02.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/flagstone_patio/work-flagstone-patio-03.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/flagstone_patio/work-flagstone-patio-04.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/flagstone_patio/work-flagstone-patio-05.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/flagstone_patio/work-flagstone-patio-06.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/flagstone_patio/work-flagstone-patio-07.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/flagstone_patio/work-flagstone-patio-08.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/flagstone_patio/work-flagstone-patio-09.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/flagstone_patio/work-flagstone-patio-10.webp', name: '', desc: '' },
		]
	},
	{
		name: 'Masonry Fireplaces', name_es: 'Chimeneas de Mampostería',
		images: [
			{ src: './resources/images/business/work/fireplace/work-fireplace-01.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/fireplace/work-fireplace-02.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/fireplace/work-fireplace-03.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/fireplace/work-fireplace-04.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/fireplace/work-fireplace-05.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/fireplace/work-fireplace-06.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/fireplace/work-fireplace-07.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/fireplace/work-fireplace-08.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/fireplace/work-fireplace-09.webp', name: '', desc: '' },
		]
	},
	{
		name: 'Stone Mailboxes', name_es: 'Buzones de Piedra',
		images: [
			{ src: './resources/images/business/work/mailboxes/work-mailbox-01.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/mailboxes/work-mailbox-02.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/mailboxes/work-mailbox-03.webp', name: '', desc: '' },
		]
	},
	{
		name: 'Other Services', name_es: 'Otros Servicios',
		images: [
			{ src: './resources/images/business/work/previs/work-previs-01.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/previs/work-previs-02.webp', name: '', desc: '' },
			{ src: './resources/images/business/work/previs/work-previs-03.webp', name: '', desc: '' },
		]
	},
];

//excludes final gallery
const random_gallery_index = () => { return Math.round(Math.random() * (galleries.length - 2)); };
const random_gallery_image_index = (gallery_index) => { return Math.round(Math.random() * (galleries[gallery_index].images.length - 1)); };
const get_gallery_image_info_random = () =>
{
	let gid = random_gallery_index();
	let iid = random_gallery_image_index(gid);
	return galleries[gid].images[iid];
};
const get_gallery_image_info = (gallery_index, image_index) => { return galleries[gallery_index].images[image_index] };



























let localisation = {
	languages: ['en', 'es']
};
localisation.setLang = (code = 'en') =>
{
	document.documentElement.setAttribute('lang', code);
	set_stored_string('user-lang', code);
};
localisation.nextLanguage = () =>
{
	let lang_index = localisation.languages.indexOf(document.documentElement.getAttribute('lang'));
	lang_index = (lang_index + 1) % localisation.languages.length;
	localisation.setLang(localisation.languages[lang_index]);
};

window.localisation = localisation;
window.localisation.setLang(get_stored_string('user-lang', 'en') ?? 'en');


























window.dark_mode =
{
	enabled: false,
	apply: () =>
	{
		document.documentElement.setAttribute('theme', window.dark_mode.enabled === true ? 'dark' : 'light');
		set_stored_string('user-dark', (window.dark_mode.enabled === true).toString());
	},
	toggle: () =>
	{
		window.dark_mode.enabled = window.dark_mode.enabled !== true;
		window.dark_mode.apply();
	},
	set: (enabled) =>
	{
		window.dark_mode.enabled = enabled ?? false;
		window.dark_mode.apply();
	},
};
window.dark_mode.enabled = get_stored_string('user-dark', false) == 'true';
window.dark_mode.apply();


























const social_icons =
	[
		{ code: 'svg_icon_social_face', html: `<svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" data-ux="IconSocial" class="icon"><path fill-rule="evenodd" d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03h-2.54v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.908h-2.33V22c4.78-.755 8.437-4.917 8.437-9.939z"></path></svg>` },
		{ code: 'svg_icon_social_inst', html: `<svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" data-ux="IconSocial" class="icon"><path d="M16.604 8.516c.13.35.198.719.203 1.091.033.622.033.811.033 2.386 0 1.574-.004 1.763-.033 2.385a3.273 3.273 0 0 1-.203 1.091 1.956 1.956 0 0 1-1.12 1.12c-.35.13-.719.198-1.091.204-.622.032-.811.032-2.386.032-1.574 0-1.763-.003-2.385-.032a3.273 3.273 0 0 1-1.091-.204 1.956 1.956 0 0 1-1.12-1.12 3.273 3.273 0 0 1-.204-1.09c-.032-.623-.032-.812-.032-2.386 0-1.575.003-1.764.032-2.386.006-.372.074-.741.204-1.09a1.956 1.956 0 0 1 1.12-1.12c.35-.13.718-.199 1.09-.204.623-.033.812-.033 2.386-.033 1.575 0 1.764.004 2.386.033.372.005.741.074 1.09.203.515.2.922.606 1.12 1.12zM12 15.033a3.033 3.033 0 1 0 0-6.066 3.033 3.033 0 0 0 0 6.066zm3.153-5.477a.71.71 0 1 0 0-1.418.71.71 0 0 0 0 1.418zM12 13.967a1.967 1.967 0 1 1 0-3.934 1.967 1.967 0 0 1 0 3.934zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10A10 10 0 0 0 12 2zm5.87 12.433c-.01.49-.102.974-.274 1.432a3.018 3.018 0 0 1-1.727 1.728 4.335 4.335 0 0 1-1.433.272c-.629.03-.829.037-2.432.037-1.604 0-1.819 0-2.433-.037a4.335 4.335 0 0 1-1.433-.272 3.018 3.018 0 0 1-1.727-1.728 4.335 4.335 0 0 1-.273-1.432c-.029-.63-.036-.83-.036-2.433 0-1.604 0-1.818.036-2.433.01-.49.102-.974.273-1.432a3.018 3.018 0 0 1 1.727-1.728 4.335 4.335 0 0 1 1.433-.272c.629-.03.829-.037 2.433-.037 1.603 0 1.818 0 2.432.037.49.009.974.101 1.433.272.794.307 1.42.934 1.727 1.728.172.458.264.943.273 1.432.03.63.036.83.036 2.433 0 1.604-.007 1.804-.036 2.433z"></path></svg>` },
		{ code: 'svg_icon_social_pint', html: `<svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" data-ux="IconSocial" class="icon"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.858 6.356 9.315-.088-.791-.167-2.008.034-2.872.182-.78 1.173-4.97 1.173-4.97s-.3-.6-.3-1.485c0-1.39.807-2.428 1.81-2.428.854 0 1.266.64 1.266 1.408 0 .858-.547 2.14-.829 3.33-.235.995.5 1.807 1.481 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.394-1.72-4.068-4.177-4.068-2.846 0-4.516 2.134-4.516 4.34 0 .86.331 1.78.745 2.282a.3.3 0 01.069.287c-.076.316-.245.995-.278 1.134-.043.183-.145.222-.334.133-1.25-.58-2.03-2.407-2.03-3.873 0-3.155 2.292-6.052 6.607-6.052 3.47 0 6.165 2.472 6.165 5.776 0 3.446-2.173 6.22-5.19 6.22-1.012 0-1.965-.527-2.291-1.149l-.623 2.378c-.226.868-.835 1.957-1.243 2.621.936.29 1.93.446 2.961.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"></path></svg>` },
		{ code: 'svg_icon_social_tikt', html: `<svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" data-ux="IconSocial" class="icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.9723 10.8705C17.0707 10.8698 17.1692 10.8648 17.2676 10.8554L17.269 10.8547V8.85796C15.7233 8.7452 14.4807 7.54139 14.3184 6H12.5996L12.5816 14.3771C12.5816 15.4049 11.6737 16.2144 10.6459 16.2144C9.61878 16.2144 8.7856 15.3819 8.7856 14.3541C8.7856 13.327 9.61806 12.4938 10.6459 12.4938C10.701 12.4938 10.7545 12.5012 10.808 12.5085C10.8291 12.5114 10.8502 12.5143 10.8714 12.5168V10.7197C10.8503 10.7185 10.8292 10.717 10.808 10.7156C10.7543 10.7119 10.7005 10.7082 10.6459 10.7082C8.63189 10.7082 7 12.3401 7 14.3541C7 16.3681 8.63189 18 10.6459 18C12.6599 18 14.2918 16.3674 14.2918 14.3541V9.4218C14.8844 10.3261 15.8921 10.8705 16.9723 10.8705Z"></path></svg>` },
		{ code: 'svg_icon_social_yelp', html: `<svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" data-ux="IconSocial" class="icon"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10A10 10 0 0 0 12 2zM7.055 13.745a.97.97 0 0 1-.073-.509l.182-2.072a.687.687 0 0 1 .29-.364c.182-.11.582.036.582.036l2.619 1.31s.4.181.4.509c-.037.436-.219.436-.364.509l-3.055.654s-.436.146-.581-.073zm4.945.473l-.036 3.018s.036.437-.219.51c-.144.02-.291.02-.436 0l-2.036-.655a.6.6 0 0 1-.291-.364c-.073-.218.182-.545.182-.545l2.036-2.255s.327-.29.582-.145c.254.145.254.436.218.436zm-.364-3.236a.687.687 0 0 1-.581-.182l-2.51-3.418s-.363-.4-.181-.691a.64.64 0 0 1 .363-.291l2.4-.873c.11-.036.218-.145.582.073.255.145.291.655.291.655l.036 4.145s-.072.51-.4.582zm1.419.582l1.636-2.582s.145-.364.436-.327c.152.002.29.085.364.218l1.382 1.636a.676.676 0 0 1 .072.473c-.072.218-.472.363-.472.363l-2.91.837s-.4.073-.545-.182c-.145-.255 0-.51.037-.436zm3.781 3.309L15.6 16.655a.815.815 0 0 1-.436.181c-.219 0-.473-.327-.473-.327l-1.564-2.618s-.182-.364.037-.582c.218-.218.472-.109.509-.145l2.909.945s.4.073.4.364a1.942 1.942 0 0 1-.146.4z"></path></svg>` },
		{ code: 'svg_icon_social_google', html: `<svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" data-ux="Icon" class="icon"><g fill="none" fill-rule="evenodd" transform="translate(-7.5, -7.5) scale(2)"><g transform="translate(5.556 5.5)"><path fill="currentColor" d="M8.494 4.375c0-.303-.028-.595-.079-.875H4.334v1.655h2.332c-.1.535-.406.988-.865 1.291V7.52h1.4c.82-.744 1.293-1.841 1.293-3.144z"></path><path fill="currentColor" d="M4.334 8.556c1.17 0 2.15-.383 2.868-1.037l-1.4-1.073c-.389.257-.885.408-1.468.408-1.129 0-2.084-.752-2.425-1.763H.46v1.108a4.338 4.338 0 0 0 3.873 2.357z"></path><path fill="currentColor" d="M1.909 5.09a2.542 2.542 0 0 1-.136-.812c0-.282.05-.556.136-.813V2.357H.46a4.231 4.231 0 0 0 0 3.842l1.448-1.108z"></path><path fill="currentColor" d="M4.334 1.701c.636 0 1.207.216 1.656.64l1.243-1.227C6.483.424 5.502 0 4.333 0 2.64 0 1.175.959.462 2.357l1.448 1.108c.34-1.011 1.296-1.764 2.425-1.764z"></path></g></g></svg>` },
	];

social_icons.forEach(
	icon =>
	{
		let e = document.getElementById(icon.code);
		if (e) e.innerHTML = icon.html;
	}
);




























window.background = {
	e_root: document.getElementById('body-background-root'),
	e_img: document.getElementById('body-background-img'),
	setImageSource: src => 
	{
		window.background.e_img.src = src;
	},

	fadeTo: src => 
	{
		const do_fade = async () =>
		{
			window.background.e_img.style.opacity = '0%';
			await sleep(600);
			window.background.setImageSource(src);
			await sleep(600);
			window.background.e_img.style.opacity = '90%';
			await sleep(600);
		};
		do_fade();
	},

	set_brightness: percent =>
	{
		window.background.e_root.style.opacity = percent + '%';
	}
};


let background_anim_duration_s = 60;
let background_change_delta_s = 40;
setRootStyleProperty('--background-animation-duration', background_anim_duration_s + 's');
window.setInterval(() => { window.background.fadeTo(get_gallery_image_info_random().src); }, background_change_delta_s * 1000);
window.background.fadeTo(get_gallery_image_info_random().src);



























window.e_header_root = document.getElementById('body-header');
window.e_header_title = addChild(window.e_header_root, { className: 'header-title' });
window.header = {
	Expand: () =>
	{
		window.e_header_root.setAttribute('expanded', '');
	},
	Collapse: () =>
	{
		window.e_header_root.removeAttribute('expanded');
	},
};






















window.e_content_root = document.getElementById('body-main');

class Page
{
	constructor(populate)
	{
		this.populate = populate;
	}

	async Create()
	{
		const process = async () =>
		{
			Experience.e_page_root.style.pointerEvents = 'none';
			Experience.e_page_root.style.opacity = '0%';
			Experience.e_page_root.style.translate = 'calc(-50% + 0.5rem) -50%';
			await sleep(200);
			Experience.e_page_root.innerHTML = '';
			this.e_root = addChild(
				Experience.e_page_root,
				{
					style: 'position:relative; display:flex; flex-direction:inherit; gap:inherit; padding:0;'
						+ 'flex-grow:1.0; flex-basis:0.0; align-items:inherit; align-content:inherit; justify-content:center;'
				}
			);
			if (typeof this.populate === 'function') this.populate(this);
			await sleep(22);
			Experience.e_page_root.style.removeProperty('pointer-events');
			Experience.e_page_root.style.translate = '-50% -50%';
			Experience.e_page_root.style.opacity = '100%';
			await sleep(200);
		};
		await process();
	}

	async Remove()
	{
		const process = async () =>
		{
			Experience.e_page_root.style.pointerEvents = 'none';
			Experience.e_page_root.style.translate = 'calc(-50% - 0.5rem) -50%';
			Experience.e_page_root.style.opacity = '0%';
			await sleep(200);
			this.e_root.remove();
		};
		await process();
	}
}

const page_prep_default = _ =>
{
	Experience.ReducePage();

	let e_body = addChild(_.e_root, { tag: 'div', style: 'position:relative; text-align:center; max-width:36rem; font-size:110%;' });
	addLabel(
		e_body,
		'This page is not ready yet. Sorry!',
		'Esta página aún no está lista. ¡Arrepentido!'
	);

	let e_buttons_root = addChild(_.e_root, { tag: 'div', className: 'button-row' });

	let e_btn_ok = addChild(e_buttons_root, { tag: 'button', style: 'position:relative;' });
	addLabel(e_btn_ok, 'OKAY', 'BIEN');
	e_btn_ok.addEventListener('click', e => { Experience.ShowPage(page_splash); });
};

const page_splash = new Page(
	_ =>
	{
		Experience.ReducePage();

		let e_intro = addChild(_.e_root, { tag: 'div', style: 'position:relative; text-align:center; max-width:36rem; font-size:110%; padding:2rem;' });
		addLabel(
			e_intro,
			'With many years of experience, Austin Yard Builder is the perfect choice for transforming your outdoor living space, no matter how big or small the patio project is!',
			'Con muchos años de experiencia, Austin Yard Builder es la elección perfecta para transformar su espacio de vida al aire libre, ¡sin importar cuán grande o pequeño sea el proyecto del patio!'
		);

		let e_buttons_root = addChild(_.e_root, { tag: 'div', className: 'button-row' });

		let e_btn_about = addChild(e_buttons_root, { tag: 'button', style: 'position:relative;' });
		addLabel(e_btn_about, 'ABOUT', 'SOBRE');
		e_btn_about.addEventListener('click', e => { Experience.ShowPage(page_about); });

		let e_btn_gallery = addChild(e_buttons_root, { tag: 'button', style: 'position:relative;' });
		addLabel(e_btn_gallery, 'SEE GALLERY', 'VER GALERÍA');
		e_btn_gallery.addEventListener('click', e => { Experience.ShowPage(page_gallery); });

		let e_btn_contact = addChild(e_buttons_root, { tag: 'button', style: 'position:relative;' });
		addLabel(e_btn_contact, 'CONTACT US', 'CONTÁCTENOS');
		e_btn_contact.addEventListener('click', e => { Experience.ShowPage(page_contact_us); });

	}
);

const page_about = new Page(
	page_prep_default
);

const page_contact_us = new Page(
	page_prep_default
);

const page_gallery = new Page(
	page =>
	{
		Experience.ExpandPage();

		window.e_header_title.innerText = 'AUSTIN YARD BUILDER | GALLERY';

		let e_topics = addChild(page.e_root, { tag: 'div', className: 'button-row' });
		let e_subject_showcase = addChild(page.e_root, { tag: 'div', className: 'gallery-showcase' });
		//let e_subjects = addChild(page.e_root, { tag: 'div', className: 'button-row' });
		let e_actions = addChild(page.e_root, { tag: 'div', className: 'button-row' });

		const add_button = (e_parent, onclick, label_en, label_es) =>
		{
			let e_btn = addChild(e_parent, { tag: 'button', style: 'position:relative;' });
			addLabel(e_btn, label_en, label_es);
			e_btn.addEventListener('click', e => { if (typeof onclick === 'function') onclick(); });
			return e_btn;
		};

		let e_img_wrap = addChild(e_subject_showcase, { tag: 'div', className: 'gallery-showcase-image-container' });
		let e_img = addChild(e_img_wrap, { tag: 'img', className: 'gallery-showcase-image' });
		let e_desc = addChild(e_img_wrap, { tag: 'div', className: 'gallery-showcase-description glass', innerText: 'This is some information about the current gallery showcase image.' });
		page.fading = false;

		let fade_to_img = async (src, slide_direction) =>
		{
			if (page.fading === true) return;

			page.fading = true;
			e_img_wrap.style.scale = '98%';
			e_img_wrap.style.opacity = '0%';
			e_img_wrap.style.translate = ((slide_direction ?? 1) * -2) + `rem 0`;
			await sleep(200);
			e_img_wrap.style.translate = ((slide_direction ?? 1) * 2) + `rem 0`;
			e_img.src = src;
			await sleep(300);
			e_img_wrap.style.scale = '100%';
			e_img_wrap.style.opacity = '100%';
			e_img_wrap.style.translate = '0% 0%';
			await sleep(200);
			page.fading = false;
		};


		galleries.forEach(
			(gallery, gallery_index) => 
			{
				add_button(e_topics, () => { fade_to_img(gallery.images[random_gallery_image_index(gallery_index)].src); }, gallery.name, gallery.name_es);
			}
		);

		add_button(e_actions, () => { Experience.ShowPage(page_splash); }, 'DONE', 'HECHO');

		fade_to_img(get_gallery_image_info_random().src);
	}
);

class Experience
{
	static page_queue = [];
	static page_changing = false;
	static page_active = null;

	static Initiate()
	{
		Experience.e_page_root = addChild(
			window.e_content_root,
			{ className: 'glass-gradient page-root' }
		);

		Experience.ShowPage(page_splash);
	}

	static ExpandPage()
	{
		window.header.Collapse();
		window.background.set_brightness(10);
		Experience.e_page_root.style.boxShadow = 'none';
		Experience.e_page_root.style.position = 'absolute';
		Experience.e_page_root.style.width = '100%';
		Experience.e_page_root.style.height = '100%';
	}

	static ReducePage()
	{
		window.header.Expand();
		window.background.set_brightness(100);
		Experience.e_page_root.style.boxShadow = '0px 0px 8px #0006';
		Experience.e_page_root.style.position = 'absolute';
		Experience.e_page_root.style.width = 'fit-content';
		Experience.e_page_root.style.height = 'fit-content';
	}

	static async ShowPage(page)
	{
		Experience.page_queue.push(page);

		if (Experience.page_changing === true) return;

		const process = async () =>
		{
			Experience.page_changing = true;
			if (Experience.page_active) await Experience.page_active.Remove();
			Experience.page_active = Experience.page_queue[Experience.page_queue.length - 1];
			Experience.page_queue = [];
			await Experience.page_active.Create();
			Experience.page_changing = false;
		};
		await process();
	}
}

Experience.Initiate();