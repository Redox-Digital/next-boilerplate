import Button from '@/components/navigation/Button';
import Hero from '@/components/layouts/Hero';
import css from './Confidentialite.module.scss';
import Head from 'next/head';

type Props = {
  handleCookiePolicy: (answer: boolean) => void;
};

export default function LPD({ handleCookiePolicy }: Props) {
  return (
    <>
      <Head>
        <title>My Company | Protection des données & mentions légales</title>
      </Head>
      <Hero
        title={
          <>
            Protection des données
            <br /> & mentions légales
          </>
        }
        subtitle={
          <>
            Vous trouverez sur cette page toutes les informations concernant les traitements de vos
            données sur notre site internet. Vous pouvez à tout moment{' '}
            <a href="#lpd-cookies">refuser l&rsquo;utilisation de cookies tiers</a>, ce choix
            n&rsquo;impactera pas votre expérience sur notre site.
          </>
        }
        source="/layouts/hero/hero.webp"
      />
      <main className={css.lpd}>
        <section className="container">
          <p>
            <b>Table des matières</b>
          </p>
          <ul>
            <li>
              <a href="#ml">Mentions légales</a>

              <ol>
                <li>
                  <a href="#ml-responsabilite">Responsabilité</a>
                </li>
                <li>
                  <a href="#ml-liens">Renvois et liens</a>
                </li>
                <li>
                  <a href="#ml-auteur">Droits d&rsquo;auteur</a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#lpd">Protection des données</a>

              <ol>
                <li>
                  <a href="#lpd-responsabilite">Responsabilité</a>
                </li>
                <li>
                  <a href="#lpd-donnees">Données collectées</a>
                </li>
                <li>
                  <a href="#lpd-securite">Sécurité des données</a>
                </li>
                <li>
                  <a href="#lpd-traitement">Traitement des données collectées</a>
                </li>
                <li>
                  <a href="#lpd-cookies">Cookies & services d&rsquo;analyse</a>
                </li>
              </ol>
            </li>
          </ul>
        </section>

        <hr className="container" />

        <section className="container">
          <h2 id="ml">Mentions légales</h2>
          <h3 id="ml-responsabilite">1. Responsabilité</h3>
          <p>
            L&rsquo;exactitude des contenus publiés a été vérifiée avec le plus grand soin.
            Toutefois, aucune garantie ne peut être donnée quant à l&rsquo;exactitude, la précision,
            l&rsquo;actualité, la fiabilité et l&rsquo;exhaustivité du contenu des présentes
            informations.
          </p>
          <p>
            My Company Sàrl se réserve expressément le droit de modifier, de supprimer ou de ne pas
            publier temporairement tout ou partie des contenus, et ce à tout moment et sans préavis.
          </p>
          <p>
            My Company Sàrl ne saurait être tenu pour responsable des dommages matériels ou
            immatériels qui pourraient être causés par l&rsquo;accès aux informations diffusées ou
            par leur utilisation ou non-utilisation, par le mauvais usage de la connexion ou par des
            problèmes techniques.
          </p>
        </section>
        <section className="container">
          {' '}
          <h3 id="ml-liens">2. Renvois et liens</h3>
          <p>
            Les éventuels renvois ou liens vers des sites Internet de tiers ne relèvent pas de la
            responsabilité de My Company Sàrl et de ses responsables de contenu. L&rsquo;accès et
            l&rsquo;utilisation de sites Internet de tiers se font aux risques et périls de
            l&rsquo;utilisateur ou de l&rsquo;utilisatrice. Les contenus d&rsquo;information, les
            offres, les prestations de service, etc. des sites Internet de tiers auxquels il est
            fait référence sont entièrement sous la responsabilité du tiers concerné. My Company
            Sàrl et ses responsables de contenu déclarent explicitement qu&rsquo;ils n&rsquo;ont
            aucune influence sur le contenu, les offres, etc. des sites auxquels ils renvoient. Nous
            déclinons toute responsabilité pour les sites web de tiers.
          </p>
        </section>
        <section className="container">
          <h3 id="ml-auteur">3. Droits d&rsquo;auteur</h3>
          <p>
            Toutes les photos publiées sont soumises aux droits d&rsquo;auteur de My Company Sàrl.
            En cas d&rsquo;intérêt pour une photo, il est nécessaire de demander
            l&rsquo;autorisation écrite de My Company Sàrl. Les noms de sociétés mentionnés ou
            utilisés sont la propriété des sociétés citées et font l&rsquo;objet de droits
            d&rsquo;auteur des sociétés mentionnées.
          </p>

          <h5>Crédits photographiques</h5>
          <a href="https://mydomain.ch" target="_blank" rel="noopener noreferrer">
            My Company Sàrl
          </a>
          <a href="https://redoxdigital.ch" target="_blank" rel="noopener noreferrer">
            Redox Digital Sàrl
          </a>

          <Button to={'/'}>Retour à l&rsquo;accueil</Button>
        </section>

        <hr className="container" />

        <section className="container">
          <h2 id="lpd">Protection des données</h2>
          <h3 id="lpd-responsabilite">1. Responsabilité</h3>
          <p>
            La responsabilité pour les données collectées et traitées sur le site mydomain.ch, selon
            l&rsquo;art. 19 de la loi sur la protection des données RS 235.1, incombe à :
          </p>
          <p>
            <b>My Company Sàrl</b>
            <br />
            Ch. du Javrot 32
            <br />
            CH-1630 Bulle
            <br />
            Téléphone : <span id="phone" />
            <br />
            E-Mail : <span id="mail" />
          </p>
        </section>

        <section className="container">
          <h3 id="lpd-donnees">2. Données collectées</h3>
          <p>Les données collectées sur le site web mydomain.ch sont les suivantes :</p>
          <p>
            a){' '}
            <a href="#lpd-traitement-formulaire">Saisie des données par le formulaire de contact</a>
            <br />
            b) <a href="#lpd-traitement-technique">Saisie automatique des données techniques</a>
            <br />
            c){' '}
            <a href="#lpd-cookies">
              Saisie des données anonymes à des fins d&rsquo;analyses et de statistiques (Google
              Analytics)
            </a>
          </p>
          <p>
            Vous pouvez toutefois refuser cette dernière par l&rsquo;intermédiaire du pop-up
            apparaissant lors de votre première visite sur le site, ou bimestriellement.
          </p>
        </section>

        <section className="container">
          <h3 id="lpd-securite">3. Sécurité des données</h3>
          <p>
            Toutes les transmissions de données du site mydomain.ch s&rsquo;effectuent au moyen du
            cryptage SSL (https) conformément à l&rsquo;état actuel des possibilités techniques.
            Ceci est valable aussi bien pour la consultation de pages que pour la transmission de
            données de formulaires.
          </p>
        </section>

        <section className="container">
          <h3 id="lpd-traitement">4. Traitement des données collectées</h3>
          <h4 id="lpd-traitement-formulaire">a) Saisie des données par le formulaire de contact</h4>
          <p>
            Les données suivantes sont collectées par le formulaire de contact et sont nécessaires
            pour le traitement de votre demande :
          </p>
          <ul>
            <li>Nom & prénom</li>
            <li>Téléphone</li>
            <li>Adresse e-mail</li>
            <li>Le but de votre prise de contact</li>
            <li>Communication/message</li>
          </ul>
          <p>
            En envoyant le formulaire de contact, un courriel automatique est généré à partir des
            données saisies et envoyé à notre bureau.
          </p>
          <p>
            Les données collectées ne sont utilisées qu&rsquo;à des fins de traitement ultérieur de
            la demande. Les données envoyées par le visiteur ne sont pas transmises à des tiers et
            sont uniquement stockées à des fins d&rsquo;archivage.
          </p>

          <h4 id="lpd-traitement-technique">b) Saisie automatique des données techniques</h4>
          <p>
            Des données techniques sont saisies par le système de l&rsquo;exploitant du site
            (hébergeur). La saisie de ces données est automatique et elle sert uniquement à
            surveiller la fonctionnalité technique et la disponibilité du site mydomain.ch.
          </p>
          <p>Les données techniques suivantes sont saisies :</p>
          <ul>
            <li>adresse IP publique du visiteur</li>
            <li>date et heure de l&rsquo;accès</li>
            <li>système d&rsquo;exploitation utilisé</li>
            <li>navigateur utilisé</li>
            <li>pages consultées</li>
          </ul>
          <p>
            Les données techniques collectées sont évaluées statistiquement et anonymement par
            l&rsquo;hébergeur, dans la mesure où la surveillance technique ou les dispositions
            légales l&rsquo;exigent. Ces données ainsi que toutes les données de notre site web
            mydomain.ch sont enregistrées chez notre hébergeur web Infomaniak Network SA, Rue Eugène
            Marziano 25, 1227 Les Acacias, dont vous trouverez la déclaration de protection des
            données{' '}
            <a
              href="https://https://www.infomaniak.com/fr/cgv/reglement-general-protection-donnees"
              target="_blank"
              rel="noopener noreferrer"
            >
              ici
            </a>
            .
          </p>
        </section>

        <section className="container">
          <h3 id="lpd-cookies">5. Cookies et services d&rsquo;analyse</h3>
          <p>Pour le site web mydomain.ch, nous n’utilisons aucun cookie de tiers.</p>

          <Button to={'/'}>Retour à l&rsquo;accueil</Button>
        </section>
      </main>
    </>
  );
}
