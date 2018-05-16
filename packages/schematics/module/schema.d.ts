export interface Schema {
    /**
     * The name of the module.
     */
    name: string;
    /**
     * The path to create the pipe.
     */
    path?: string;
    /**
     * The name of the project.
     */
    project?: string;
    /**
     * Generates a routing module.
     */
    routing?: boolean;
    /**
     * The scope for the generated routing.
     */
    routingScope?: ('Child' | 'Root');
    /**
     * Specifies if a spec file is generated.
     */
    spec?: boolean;
    /**
     * Flag to indicate if a dir is created.
     */
    flat?: boolean;
    /**
     * Flag to control whether the CommonModule is imported.
     */
    commonModule?: boolean;
    /**
     * Allows specification of the declaring module.
     */
    module?: string;
}
