int? compare = null;
bool? check = null;

int Paint_Hedgehog(int [] population)
{
    int minimal_steps = -1;                            // minimal number of steps -1 by default
    Array.Sort(population);                     // minimal number of steps does not depend on order
    // 1 case: check is there are simular number of hegehogs in population array
    if (check == null)
    {
        for (int i = 0; i < population.Length; i++)
        {
            if (compare == population[i])
            {
                check = true;
                minimal_steps = population[i];
            }
            compare = population[i];
        }
    }
    // 2 case: check if difference of elements divisible by 3
    if (check != true)
    {
        for (int i = 0; i < population.Length; ++i)
        {
            for (int j = 0; j < population.Length; j++)
            {
                if ((population[i] - population[j]) % 3 == 0 && (population[i] - population[j]) != 0)
                {
                    minimal_steps = population[1];
                }
            }
        }
    }
    return minimal_steps;        // in other cases, hedgehogs cannot be painted because there will be an infinite loop
}




int[] hegehogs = {17, 4, 4};
Console.WriteLine("Minimal number of steps:"+ " " + Paint_Hedgehog(hegehogs));






