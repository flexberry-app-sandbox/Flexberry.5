﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.5
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Ед измер.
    /// </summary>
    // *** Start programmer edit section *** (ЕдИзмер CustomAttributes)

    // *** End programmer edit section *** (ЕдИзмер CustomAttributes)
    [AutoAltered()]
    [Caption("Ед измер")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЕдИзмерE", new string[] {
            "ЕдИзмер as \'Ед измер\'"})]
    [View("ЕдИзмерL", new string[] {
            "ЕдИзмер as \'Ед измер\'"})]
    public class ЕдИзмер : ICSSoft.STORMNET.DataObject
    {
        
        private string fЕдИзмер;
        
        // *** Start programmer edit section *** (ЕдИзмер CustomMembers)

        // *** End programmer edit section *** (ЕдИзмер CustomMembers)

        
        /// <summary>
        /// ЕдИзмер.
        /// </summary>
        // *** Start programmer edit section *** (ЕдИзмер.ЕдИзмер CustomAttributes)

        // *** End programmer edit section *** (ЕдИзмер.ЕдИзмер CustomAttributes)
        [StrLen(255)]
        public virtual string ЕдИзмер
        {
            get
            {
                // *** Start programmer edit section *** (ЕдИзмер.ЕдИзмер Get start)

                // *** End programmer edit section *** (ЕдИзмер.ЕдИзмер Get start)
                string result = this.fЕдИзмер;
                // *** Start programmer edit section *** (ЕдИзмер.ЕдИзмер Get end)

                // *** End programmer edit section *** (ЕдИзмер.ЕдИзмер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЕдИзмер.ЕдИзмер Set start)

                // *** End programmer edit section *** (ЕдИзмер.ЕдИзмер Set start)
                this.fЕдИзмер = value;
                // *** Start programmer edit section *** (ЕдИзмер.ЕдИзмер Set end)

                // *** End programmer edit section *** (ЕдИзмер.ЕдИзмер Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЕдИзмерE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЕдИзмерE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЕдИзмерE", typeof(IIS.5.ЕдИзмер));
                }
            }
            
            /// <summary>
            /// "ЕдИзмерL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЕдИзмерL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЕдИзмерL", typeof(IIS.5.ЕдИзмер));
                }
            }
        }
    }
}
