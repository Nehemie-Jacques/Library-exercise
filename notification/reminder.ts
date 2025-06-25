/*import cron from "node-cron";
import { PrismaClient } from "@prisma/client";
import { sendEmail } from "../notification/mailService";

const prisma = new PrismaClient();

cron.schedule("0 8 * * *", async () => {
  console.log("🔔 Vérification des emprunts en retard...");

  const maintenant = new Date();
  const demain = new Date();
  demain.setDate(maintenant.getDate() + 1);

  const emprunts = await prisma.emprunts.findMany({
    where: {
      dateRetour: undefined,
      dateEmprunt: {
        lt: demain
      }
    }
  });

  for (const emprunt of emprunts) {
    const user = await prisma.user.findUnique({ where: { id: emprunt.userID } });

    if (user) {
      await sendEmail(
        user.email,
        "Rappel de retour de livre",
        `Bonjour ${user.name}, n'oubliez pas de retourner le livre (${emprunt.livreID}) avant demain.`
      );

      await prisma.notifications.create({
        data: {
          notificationID: `notif-${Date.now()}`,
          userID: user.id,
          livreID: emprunt.livreID,
          message: `Rappel : retour du livre (${emprunt.livreID}) bientôt exigé.`
        }
      });
    }
  }
}); */
