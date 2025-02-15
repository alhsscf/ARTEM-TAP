 import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function TapGame() {
  const [coins, setCoins] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [isMarketOpen, setMarketOpen] = useState(false);

  useEffect(() => {
    const storedCoins = localStorage.getItem("coins");
    const storedEnergy = localStorage.getItem("energy");
    if (storedCoins) setCoins(parseInt(storedCoins, 10));
    if (storedEnergy) setEnergy(parseInt(storedEnergy, 10));
  }, []);

  useEffect(() => {
    localStorage.setItem("coins", coins);
    localStorage.setItem("energy", energy);
  }, [coins, energy]);

  const handleTap = () => {
    if (energy > 0) {
      setCoins(coins + 1);
      setEnergy(energy - 1);
    }
  };

  const buyEnergy = () => {
    if (coins >= 50) {
      setCoins(coins - 50);
      setEnergy(energy + 50);
    }
  };

  const buyMillionCoins = () => {
    if (coins >= 1000) {
      setCoins(coins + 1000000);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <Card className="p-4 text-center shadow-xl rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h2 className="text-2xl font-bold">Монеты: {coins}</h2>
        <h3 className="text-lg">Энергия: {energy}</h3>
      </Card>
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={handleTap}
        className="p-4 bg-blue-500 text-white rounded-xl shadow-md transform transition duration-200"
      >
        Тап!
      </motion.button>
      <Button onClick={() => setMarketOpen(true)} className="bg-green-500 text-white">
        Открыть Маркет
      </Button>
      
      <Dialog open={isMarketOpen} onOpenChange={setMarketOpen}>
        <DialogContent className="bg-white p-6 rounded-lg shadow-2xl">
          <DialogTitle className="text-xl font-bold">Маркет</DialogTitle>
          <Button onClick={buyEnergy} className="bg-green-500 text-white mt-4">
            Купить энергию (50 монет)
          </Button>
          <Button onClick={buyMillionCoins} className="bg-yellow-500 text-white mt-4">
            Lisay boshka siezh pirozhka (1 000 000 монет)
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
