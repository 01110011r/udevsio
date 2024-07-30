import promotheus from "../public/technologies/promotheus.svg";
import loki from "../public/technologies/loki.svg";
import bitbucket from "../public/technologies/bitbucket.svg";
import gitlab from "../public/technologies/gitlab.svg";
import kotlin from "../public/technologies/kotlin.svg";
import android from "../public/technologies/android.svg";
import java from "../public/technologies/java.svg";
import azure from "../public/technologies/azure.svg";
import gcp from "../public/technologies/gcp.svg";
import digitalocean from "../public/technologies/digitalocean.svg";
import aws from "../public/technologies/aws.svg";
import kubernetes from "../public/technologies/kubernetes.svg";

import elk from "../public/technologies/elk.svg";
import grafana from "../public/technologies/grafana.svg";
import terraform from "../public/technologies/terraform.svg";
import ios from "../public/technologies/ios.svg";
import swift from "../public/technologies/swift.svg";
import flutter from "../public/technologies/flutter.svg";
import nextjs from "../public/technologies/nextjs.svg";
import reactjs from "../public/technologies/reactjs.svg";
import js from "../public/technologies/js.svg";
import balsamic from "../public/technologies/balsamic.svg";
import invision from "../public/technologies/invision.svg";
import figma from "../public/technologies/figma.svg";

import docker from "../public/technologies/docker.svg";
import postgresql from "../public/technologies/postgresql.svg";
import python from "../public/technologies/python.svg";
import nodejs from "../public/technologies/nodejs.svg";
import php from "../public/technologies/php.svg";
import go from "../public/technologies/go.svg";
import antd from "../public/technologies/antd.svg";
import gatsbyjs from "../public/technologies/gatsby.svg";
import vuejs from "../public/technologies/vuejs.svg";
import principle from "../public/technologies/principle.svg";
import sketch from "../public/technologies/sketch.svg";
import suite from "../public/technologies/adobesuite.svg";

import yt from "../public/technologies/youtrack.svg";
import appium from "../public/technologies/appium.svg";
import cypress from "../public/technologies/cypress.svg";
import jmeter from "../public/technologies/jmeter.svg";
import mongodb from "../public/technologies/mongodb.svg";
import cassandra from "../public/technologies/cassandra.svg";
import sass from "../public/technologies/sass.svg";
import mui from "../public/technologies/mui.svg";
import zeplin from "../public/technologies/zeplin.svg";
import illustrator from "../public/technologies/illustrator.svg";
import lottie from "../public/technologies/lottie.svg";
import ps from "../public/technologies/photoshop.svg";

// clients
import akfaMedline from "../public/clients/akfaMedline.svg"
import cspace from "../public/clients/cspace.svg"
import deliver from "../public/clients/delever.svg"
import fonon from "../public/clients/fonon.svg"
import goodzone from "../public/clients/goodzone.svg"
import hamkorbank from "../public/clients/hamkorbank.svg"
import hoshimovIqtisodiyoti from "../public/clients/hoshimoviqtisodiyoti.svg"
import iman from "../public/clients/iman.svg"
import maxtrack from "../public/clients/maxtrack.svg"
import mytaxi from "../public/clients/mytaxi.svg"
import rabota from "../public/clients/rabota.svg"
import shefBurger from "../public/clients/shefBurger.svg"
import smsuz from "../public/clients/smsuz.svg"
import workly from "../public/clients/workly.svg"

export const technologies = [
    {type: "DevOps", logo: promotheus, name: "Promotheus", bg: "#A8BFFF"},
    {type: "DevOps", logo: loki, name: "Loki", bg: "#A8BFFF"},
    {type: "DevOps", logo: bitbucket, name: "Bitbucket", bg: "#A8BFFF"},
    {type: "DevOps", logo: gitlab, name: "Gitlab", bg: "#A8BFFF"},
    {type: "Mobile", logo: kotlin, name: "Kotlin", bg: "#DBE5FF"},
    {type: "Mobile", logo: android, name: "Android", bg: "#DBE5FF"},
    {type: "Mobile", logo: java, name: "Java", bg: "#DBE5FF"},
    {type: "Infrastructure", logo: azure, name: "Azure", bg: "#D1DDE8"},
    {type: "Infrastructure", logo: gcp, name: "GCP", bg: "#D1DDE8"},
    {type: "Infrastructure", logo: digitalocean, name: "DigitalOcean", bg: "#D1DDE8"},
    {type: "Infrastructure", logo: aws, name: "AWS", bg: "#D1DDE8"},
    {type: "Infrastructure", logo: kubernetes, name: "Kubernetes", bg: "#D1DDE8"},
    {type: "DevOps", logo: elk, name: "ELK", bg: "#A8BFFF"},
    {type: "DevOps", logo: grafana, name: "Grafana", bg: "#A8BFFF"},
    {type: "DevOps", logo: terraform, name: "Terraform", bg: "#A8BFFF"},
    {type: "Mobile", logo: ios, name: "IOS", bg: "#DBE5FF"},
    {type: "Mobile", logo: swift, name: "Swift", bg: "#DBE5FF"},
    {type: "Mobile", logo: flutter, name: "Flutter", bg: "#DBE5FF"},
    {type: "Frontend", logo: nextjs, name: "Next.JS", bg: "#C6D6FF"},
    {type: "Frontend", logo: reactjs, name: "React.JS", bg: "#C6D6FF"},
    {type: "Frontend", logo: js, name: "Javascript", bg: "#C6D6FF"},
    {type: "UX/UI", logo: balsamic, name: "Balsamic", bg: "#CED6EE"},
    {type: "UX/UI", logo: invision, name: "Invision", bg: "#CED6EE"},
    {type: "UX/UI", logo: figma, name: "Figma", bg: "#CED6EE"},
    {type: "DevOps", logo: docker, name: "Docker", bg: "#A8BFFF"},
    {type: "Backend", logo: postgresql, name: "PostgreSQL", bg: "#BDDAED"},
    {type: "Backend", logo: python, name: "Python", bg: "#BDDAED"},
    {type: "Backend", logo: nodejs, name: "Node.JS", bg: "#BDDAED"},
    {type: "Backend", logo: php, name: "PHP", bg: "#BDDAED"},
    {type: "Backend", logo: go, name: "GO", bg: "#BDDAED"},
    {type: "Frontend", logo: antd, name: "Ant Design", bg: "#C6D6FF"},
    {type: "Frontend", logo: gatsbyjs, name: "Gatsby.JS", bg: "#C6D6FF"},
    {type: "Frontend", logo: vuejs, name: "Vue.JS", bg: "#C6D6FF"},
    {type: "UX/UI", logo: principle, name: "Principle", bg: "#CED6EE"},
    {type: "UX/UI", logo: sketch, name: "Sketch", bg: "#CED6EE"},
    {type: "UX/UI", logo: suite, name: "Adobe suite", bg: "#CED6EE"},
    {type: "Testing", logo: yt, name: "YouTrack", bg: "#E1E9FE"},
    {type: "Testing", logo: appium, name: "Appium", bg: "#E1E9FE"},
    {type: "Testing", logo: cypress, name: "Cypress", bg: "#E1E9FE"},
    {type: "Testing", logo: jmeter, name: "Jmeter", bg: "#E1E9FE"},
    {type: "Backend", logo: mongodb, name: "MongoDB", bg: "#BDDAED"},
    {type: "Backend", logo: cassandra, name: "Cassandra", bg: "#BDDAED"},
    {type: "Frontend", logo: sass, name: "SASS", bg: "#C6D6FF"},
    {type: "Frontend", logo: mui, name: "Material UI", bg: "#C6D6FF"},
    {type: "UX/UI", logo: zeplin, name: "Zepline", bg: "#CED6EE"},
    {type: "UX/UI", logo: illustrator, name: "Illustrator", bg: "#CED6EE"},
    {type: "UX/UI", logo: lottie, name: "Lottie", bg: "#CED6EE"},
    {type: "UX/UI", logo: ps, name: "Photoshop", bg: "#CED6EE"},
 
];

export const clients = [
   [ 
    akfaMedline,
    cspace,
    deliver,
    fonon,
    goodzone,
    hamkorbank,
    hoshimovIqtisodiyoti
],
[
    iman,
    maxtrack,
    mytaxi,
    rabota,
    shefBurger,
    smsuz,
    workly
]
]