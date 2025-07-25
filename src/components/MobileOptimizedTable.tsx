import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TableRow {
  feature: string;
  kapes: string;
  kapesPositive: boolean;
  traditional: string;
  traditionalPositive: boolean;
}

interface MobileOptimizedTableProps {
  data: TableRow[];
  title?: string;
}

export const MobileOptimizedTable = ({ data, title }: MobileOptimizedTableProps) => {
  return (
    <div className="space-y-3">
      {title && (
        <h3 className="text-lg font-semibold text-center mb-6">{title}</h3>
      )}
      
      {/* Mobile Card Layout - Stack cards for better readability */}
      <div className="md:hidden space-y-4">
        {data.map((row, index) => (
          <Card key={index} className="border border-gray-200 shadow-sm">
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-900 text-sm mb-3">{row.feature}</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-xs font-medium text-green-700">Kapes</span>
                  </div>
                  <p className="text-xs text-green-600 font-medium leading-tight">{row.kapes}</p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                    <span className="text-xs font-medium text-red-700">Traditional</span>
                  </div>
                  <p className="text-xs text-red-600 font-medium leading-tight">{row.traditional}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop Table Layout - Responsive table with horizontal scroll */}
      <div className="hidden md:block">
        <Card className="border-0 shadow-lg overflow-hidden bg-white">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50/80 border-b-2 border-gray-200">
                    <th className="text-left font-semibold py-6 px-8 text-gray-700 border-r border-gray-200">Feature</th>
                    <th className="text-center font-semibold py-6 px-8 text-gray-700 border-r border-gray-200">Kapes</th>
                    <th className="text-center font-semibold py-6 px-8 text-gray-700">Traditional Suppliers</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50/30 transition-colors">
                      <td className="py-6 px-8 border-r border-gray-200">
                        <span className="font-medium text-gray-900">{row.feature}</span>
                      </td>
                      <td className="py-6 px-8 text-center border-r border-gray-200">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="font-medium text-green-600">{row.kapes}</span>
                        </div>
                      </td>
                      <td className="py-6 px-8 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <X className="h-5 w-5 text-red-500" />
                          <span className="font-medium text-red-600">{row.traditional}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};